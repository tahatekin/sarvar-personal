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
    <section id="contacts" className="py-24 md:py-32 border-t border-[#e2e8f0] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0f3460]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#e94560]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#e94560] font-semibold mb-3">Contacts</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-lg mb-12 leading-relaxed">
            Have a project in mind or just want to connect? Reach out through any of the channels below.
          </p>

          <a
            href="mailto:hello@davewebsite.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#0a0a0a] hover:text-[#0f3460] transition-colors group"
          >
            hello@davewebsite.com
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform text-[#e94560]"
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
              className="text-sm font-medium text-[#0077b5] transition-all border border-[#0077b530] bg-[#0077b508] px-4 py-2.5 rounded-lg hover:bg-[#0077b515] hover:border-[#0077b560]"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/timofey.bak.7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#1877f2] transition-all border border-[#1877f230] bg-[#1877f208] px-4 py-2.5 rounded-lg hover:bg-[#1877f215] hover:border-[#1877f260]"
            >
              Facebook
            </a>
            <a
              href="https://x.com/_mayweather"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0a0a0a] transition-all border border-[#0a0a0a20] bg-[#0a0a0a05] px-4 py-2.5 rounded-lg hover:bg-[#0a0a0a10] hover:border-[#0a0a0a40]"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
