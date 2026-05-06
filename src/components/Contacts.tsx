"use client";

import { useRef, useEffect } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Contacts() {
  const ref = useReveal();

  return (
    <section id="contacts" className="py-24 md:py-32 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#999] mb-3">Contacts</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#666] text-base md:text-lg max-w-lg mb-12 leading-relaxed">
            Have a project in mind or just want to connect? Reach out through any of the channels below.
          </p>

          <a
            href="mailto:hello@davewebsite.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#0a0a0a] hover:opacity-60 transition-opacity group"
          >
            hello@davewebsite.com
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/timofeybak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#555] hover:text-[#0a0a0a] transition-colors border border-[#e5e5e5] px-4 py-2.5 rounded-lg hover:border-[#0a0a0a]"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/timofey.bak.7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#555] hover:text-[#0a0a0a] transition-colors border border-[#e5e5e5] px-4 py-2.5 rounded-lg hover:border-[#0a0a0a]"
            >
              Facebook
            </a>
            <a
              href="https://x.com/_mayweather"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#555] hover:text-[#0a0a0a] transition-colors border border-[#e5e5e5] px-4 py-2.5 rounded-lg hover:border-[#0a0a0a]"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
