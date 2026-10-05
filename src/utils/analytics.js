import { useEffect } from "react";

// Every parameter any event uses. Each push resets these to undefined first,
// because GTM's data model keeps old values and a shared GA4 tag would
// otherwise send stale params (e.g. link_location on a project_view).
const EVENT_PARAMS = [
    "project_name", "project_category", "project_position", "link_type", "link_url",
    "contact_method", "link_location", "form_name", "first_field", "lead_source",
    "error_status", "cta_text", "cta_location", "file_name", "menu_item", "nav_type",
    "section_name", "item_name", "theme_selected",
];
const CLEARED = Object.fromEntries(EVENT_PARAMS.map((key) => [key, undefined]));

// Pushes a GA4-style event into the GTM dataLayer.
// Event and parameter names are snake_case so they map 1:1 to GA4.
export const trackEvent = (event, params = {}) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...CLEARED, ...params });
};

// Fires section_view once per section per page load when the section reaches the
// middle of the viewport (works for sections taller than the screen).
export const useSectionViews = (sectionIds) => {
    useEffect(() => {
        if (!("IntersectionObserver" in window)) return;
        const seen = new Set();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting && !seen.has(id)) {
                        seen.add(id);
                        trackEvent("section_view", { section_name: id });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -50% 0px", threshold: 0 }
        );
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [sectionIds]);
};
