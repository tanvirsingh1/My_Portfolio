import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import "./NetworkBackground.css";

// Node colors per theme, as "r, g, b" so alpha can vary per line
const PALETTE = {
    light: { node: "15, 110, 140", link: "15, 110, 140", cursor: "4, 160, 200" },
    dark: { node: "4, 217, 255", link: "4, 217, 255", cursor: "120, 235, 255" },
};

const LINK_DISTANCE = 140;
const CURSOR_DISTANCE = 180;

const NetworkBackground = ({ theme }) => {
    const canvasRef = useRef(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const colors = PALETTE[theme] || PALETTE.light;
        const pointer = { x: -9999, y: -9999 };
        let width = 0;
        let height = 0;
        let nodes = [];
        let frameId = null;

        const createNodes = () => {
            const count = Math.max(28, Math.min(90, Math.floor((width * height) / 16000)));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.6 + 1,
            }));
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            createNodes();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist < LINK_DISTANCE) {
                        ctx.strokeStyle = `rgba(${colors.link}, ${0.22 * (1 - dist / LINK_DISTANCE)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                const cursorDist = Math.hypot(a.x - pointer.x, a.y - pointer.y);
                if (cursorDist < CURSOR_DISTANCE) {
                    ctx.strokeStyle = `rgba(${colors.cursor}, ${0.45 * (1 - cursorDist / CURSOR_DISTANCE)})`;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(pointer.x, pointer.y);
                    ctx.stroke();
                }

                ctx.fillStyle = `rgba(${colors.node}, 0.55)`;
                ctx.beginPath();
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const step = () => {
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
            }
            draw();
            frameId = requestAnimationFrame(step);
        };

        const start = () => {
            if (frameId === null && !reduceMotion) frameId = requestAnimationFrame(step);
        };
        const stop = () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
            frameId = null;
        };

        const handlePointer = (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };
        const handleLeave = () => {
            pointer.x = -9999;
            pointer.y = -9999;
        };
        const handleVisibility = () => (document.hidden ? stop() : start());

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                resize();
                if (reduceMotion) draw();
            }, 150);
        };

        resize();
        if (reduceMotion) {
            draw();
        } else {
            start();
            window.addEventListener("pointermove", handlePointer, { passive: true });
            document.addEventListener("pointerleave", handleLeave);
        }
        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            stop();
            clearTimeout(resizeTimer);
            window.removeEventListener("pointermove", handlePointer);
            document.removeEventListener("pointerleave", handleLeave);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [theme, reduceMotion]);

    return (
        <div className={`network-bg network-bg-${theme}`} aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default NetworkBackground;
