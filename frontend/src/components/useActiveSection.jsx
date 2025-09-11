import { useEffect } from "react";

export function useActiveSection(setActive, options = { threshold: 0.6 }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, options);

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [setActive, options]);
}