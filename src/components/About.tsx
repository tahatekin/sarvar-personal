"use client";

import { useRef, useEffect } from "react";

const roles = [
  {
    num: "01",
    title: "Entrepreneur",
    desc: "I build and scale businesses from concept to market, transforming ideas into sustainable companies through clear strategy, strong execution, and innovation.",
    color: "#e94560",
  },
  {
    num: "02",
    title: "Investor",
    desc: "I invest in forward-thinking founders and high-potential ventures, providing not only capital but also strategic insight and hands-on support to create lasting value.",
    color: "#0f3460",
  },
  {
    num: "03",
    title: "Advisor",
    desc: "I actively support creative professionals and impactful initiatives that advance culture, foster innovation, and contribute to positive change in society.",
    color: "#1a1a2e",
  },
  {
    num: "04",
    title: "Business Partner",
    desc: "I collaborate closely with founders and teams, offering experience, structure, and long-term commitment to help businesses grow stronger and reach shared ambitions.",
    color: "#16213e",
  },
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

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={sectionRef}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#e94560] font-semibold mb-3">About Me</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-4">
            Hello, I&apos;m <span className="gradient-text">Dave</span>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-lg mb-16 leading-relaxed">
            Here you&apos;ll find detailed descriptions of what I do and how I can help.
          </p>

          <div className="divide-y divide-[#e2e8f0]">
            {roles.map((role) => (
              <div
                key={role.num}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[80px_220px_1fr] gap-4 md:gap-8 items-start group cursor-default"
              >
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: role.color }}
                >
                  {role.num}
                </span>
                <h3
                  className="text-lg font-semibold text-[#0a0a0a] transition-colors group-hover:text-[#0f3460]"
                >
                  {role.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed text-base">{role.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-base md:text-lg text-[#4b5563] max-w-xl leading-relaxed">
            My mission is to{" "}
            <span className="text-[#1a1a2e] font-semibold border-b-2 border-[#e94560] pb-0.5">
              support those who dare to take risks
            </span>
            , and create meaningful businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
