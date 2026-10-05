import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import { BsGithub, BsLinkedin, BsEnvelope, BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { trackEvent } from "../../utils/analytics";
import "./Contact.css";

const EMAIL = "tnvir2182002@gmail.com";
const spring = { type: "spring", stiffness: 100, damping: 20 };
const FORM_NAME = "contact_form";

const contactLinks = [
    { method: "email", label: EMAIL, href: `mailto:${EMAIL}`, icon: BsEnvelope, external: false },
    { method: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/tanvir-singh-b66471293/", icon: BsLinkedin, external: true },
    { method: "github", label: "GitHub", href: "https://github.com/tanvirsingh1", icon: BsGithub, external: true },
];

const Contact = () => {
    const form = useRef();
    const formStarted = useRef(false);
    const reduceMotion = useReducedMotion();
    // idle | sending | success | error
    const [status, setStatus] = useState("idle");

    // form_start fires once, on the first field a visitor focuses
    const handleFormFocus = (e) => {
        if (formStarted.current) return;
        formStarted.current = true;
        trackEvent("form_start", { form_name: FORM_NAME, first_field: e.target.name });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        // Never push what the visitor typed (name/email/message): it's PII and GA4 forbids it
        trackEvent("form_submit", { form_name: FORM_NAME });
        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            form.current.reset();
            setStatus("success");
            trackEvent("generate_lead", { form_name: FORM_NAME, lead_source: "portfolio_contact_form" });
        } catch (error) {
            console.log("Failed to send email.", error);
            setStatus("error");
            trackEvent("form_error", {
                form_name: FORM_NAME,
                error_status: error && error.status ? String(error.status) : "unknown",
            });
        }
    };

    const reveal = (delay = 0) => ({
        initial: reduceMotion ? false : { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { ...spring, delay },
    });

    return (
        <section className="contact" id="contact">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Contact</h2>
            <hr />

            <div className="contact-grid">
                <motion.div className="contact-intro" {...reveal()}>
                    <h3>Let's work together</h3>
                    <p>
                        Hiring for a data, analytics or AI automation role, or have a project in mind?
                        Send me a message and I'll get back to you within a couple of days.
                    </p>
                    <ul className="contact-links">
                        {contactLinks.map(({ method, label, href, icon: Icon, external }) => (
                            <li key={method}>
                                <a
                                    href={href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    onClick={() => trackEvent("contact_click", {
                                        contact_method: method,
                                        link_location: "contact_section",
                                        link_url: href,
                                    })}
                                >
                                    <Icon aria-hidden="true" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={handleSubmit}
                    onFocus={handleFormFocus}
                    className="contact-form"
                    {...reveal(0.1)}
                >
                    <div className="form-row">
                        <div className="form-field">
                            <label htmlFor="contact-name">Name</label>
                            <input id="contact-name" type="text" name="name" autoComplete="name" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="contact-email">Email</label>
                            <input id="contact-email" type="email" name="email" autoComplete="email" required />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="contact-message">Message</label>
                        <textarea id="contact-message" name="message" rows="5" required />
                    </div>

                    <motion.button
                        type="submit"
                        className="form-button"
                        disabled={status === "sending"}
                        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    >
                        {status === "sending" ? "Sending..." : "Send message"}
                    </motion.button>

                    <div className="form-status" role="status" aria-live="polite">
                        {status === "success" && (
                            <motion.p
                                className="form-status-success"
                                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <BsCheckCircleFill aria-hidden="true" />
                                <span>Thanks, your message is on its way. I'll reply soon.</span>
                            </motion.p>
                        )}
                        {status === "error" && (
                            <motion.p
                                className="form-status-error"
                                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <BsExclamationCircleFill aria-hidden="true" />
                                <span>
                                    Something went wrong. Please email me directly at{" "}
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                                </span>
                            </motion.p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
