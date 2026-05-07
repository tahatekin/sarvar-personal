"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const avatars = ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png"];

const badges = [
  { label: "Entrepreneur", bg: "rgb(232, 234, 237)", text: "rgb(0, 0, 0)", top: "50%", left: "0", translate: "-30% -50%" },
  { label: "Investor", bg: "rgb(150, 183, 200)", text: "rgb(255, 255, 255)", top: "10%", right: "0", translate: "20% 0%" },
  { label: "Business Partner", bg: "rgb(136, 95, 168)", text: "rgb(255, 255, 255)", bottom: "18%", right: "0", translate: "15% 0%" },
  { label: "Advisor", bg: "rgb(218, 234, 86)", text: "rgb(0, 0, 0)", bottom: "2%", left: "8%", translate: "0% 50%" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section id="home" className="min-h-[100svh] flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/dot-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center top",
          backgroundSize: "60px",
        }}
      />

      <div
        ref={sectionRef}
        className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 flex-1 flex flex-col justify-center relative z-10"
      >
        {/* Desktop: two columns | Mobile: stacked (image on top) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 py-16 sm:py-20 md:py-0">
          {/* Left side - Text (on desktop) / Bottom (on mobile) */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-[1.1] tracking-tight mb-5 text-[#0a0a0a]">
              Dave Richardson
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#6b7280] leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
              I build businesses and help entrepreneurs grow theirs through strong
              strategy, practical insights, and real-world experience.
            </p>

            {/* Button + Trusted row */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
              {/* Button */}
              <a
                href="#contacts"
                className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium pl-6 pr-2 py-2 rounded-full hover:bg-[#1a1a2e] transition-colors group shrink-0"
              >
                Let&apos;s connect
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7h9M7.5 3l4 4-4 4"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* Trusted section */}
              <div className="flex items-center gap-3">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-[2.5px] border-white overflow-hidden relative"
                      style={{ zIndex: avatars.length - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="black">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-[#6b7280]">Trusted by businesses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Photo with circles and badges (on desktop) / Top (on mobile) */}
          <div className="relative order-1 md:order-2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] shrink-0">
            {/* Outer spinning dashed circle (biggest) - spins left */}
            <img
              src="/dashed-circle-big.png"
              alt=""
              className="absolute top-1/2 left-1/2 w-[110%] h-[110%] animate-spin-slow-reverse pointer-events-none"
            />
            {/* Inner spinning dashed circle - spins right */}
            <img
              src="/dashed-circle.png"
              alt=""
              className="absolute top-1/2 left-1/2 w-[90%] h-[90%] animate-spin-slow pointer-events-none"
            />

            {/* Photo */}
            <div
              className="absolute top-1/2 left-1/2 w-[60%] h-[60%] rounded-full overflow-hidden"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Image
                src="/dave-photo.png"
                alt="Dave Richardson"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="absolute text-[10px] sm:text-xs md:text-sm font-medium px-3 py-1.5 rounded-[20px] whitespace-nowrap z-10"
                style={{
                  backgroundColor: badge.bg,
                  color: badge.text,
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                  translate: badge.translate,
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
