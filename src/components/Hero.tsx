"use client";

import { useEffect, useRef } from "react";

const marqueeItems = [
  "Trusted by businesses",
  "Entrepreneur",
  "Investor",
  "Business Partner",
  "Advisor",
  "Trusted by businesses",
  "Entrepreneur",
  "Investor",
  "Business Partner",
  "Advisor",
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [badgeRef.current, headingRef.current, subRef.current, btnRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150 + i * 150);
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0f3460]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#e94560]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 py-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p ref={badgeRef} className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#0f3460] bg-[#0f3460]/8 border border-[#0f3460]/20 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] animate-pulse inline-block" />
            Personal Website
          </p>
          <h1
            ref={headingRef}
            className="text-[clamp(56px,8vw,96px)] font-bold leading-[1.05] tracking-tight mb-8 gradient-text"
          >
            Dave Richardson
          </h1>
          <p
            ref={subRef}
            className="text-lg md:text-xl text-[#4b5563] leading-relaxed max-w-xl mb-10"
          >
            I build businesses and help entrepreneurs grow theirs through strong
            strategy, practical insights, and real-world experience.
          </p>
          <a
            ref={btnRef}
            href="#contacts"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#0f3460] transition-colors shadow-lg shadow-[#1a1a2e]/20"
          >
            Let&apos;s connect
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-[#e2e8f0] py-4 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fafaf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fafaf8] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 text-sm text-[#9ca3af] uppercase tracking-widest">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#e94560] inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
