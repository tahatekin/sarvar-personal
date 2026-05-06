"use client";

import { useRef, useEffect } from "react";

const career = [
  { title: "Co-Founder, CEO", company: "Beeza", period: "2025 → Now", active: true },
  { title: "Founder, CEO", company: "Close AI", period: "2024 → 2025", active: false },
  { title: "Founder", company: "Arrana", period: "2020 → 2024", active: false },
  { title: "Co-Founder", company: "Terracota", period: "2019 → 2020", active: false },
];

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

export default function Career() {
  const ref = useReveal();

  return (
    <section id="career" className="py-24 md:py-32 border-t border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#e94560] font-semibold mb-3">Career</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-4">
            My <span className="gradient-text">Way</span>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-lg mb-16 leading-relaxed">
            The journey to becoming who I am today wasn&apos;t easy, and I look back on every step with love. Below are my key roles.
          </p>

          <div className="divide-y divide-[#e2e8f0]">
            {career.map((item) => (
              <div
                key={item.company}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_200px_180px] gap-2 md:gap-8 items-center group"
              >
                <div className="flex items-center gap-3">
                  {item.active && (
                    <span className="w-2 h-2 rounded-full bg-[#e94560] animate-pulse shrink-0" />
                  )}
                  <h3 className="text-lg font-semibold text-[#0a0a0a] group-hover:text-[#0f3460] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-[#4b5563] font-medium">{item.company}</p>
                <p className="text-sm text-[#9ca3af] md:text-right tabular-nums">{item.period}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://www.linkedin.com/in/timofeybak/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white font-medium bg-[#1a1a2e] border border-[#1a1a2e] px-5 py-3 rounded-lg hover:bg-[#0f3460] hover:border-[#0f3460] transition-colors group shadow-md shadow-[#1a1a2e]/15"
            >
              View Full Career
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
