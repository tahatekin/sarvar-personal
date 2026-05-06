"use client";

import { useRef, useEffect } from "react";

const socials = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/timofeybak",
    href: "https://www.linkedin.com/in/timofeybak/",
    color: "#0077b5",
    bg: "#0077b510",
    border: "#0077b530",
  },
  {
    name: "Facebook",
    handle: "facebook.com/timofey.bak.7",
    href: "https://www.facebook.com/timofey.bak.7",
    color: "#1877f2",
    bg: "#1877f210",
    border: "#1877f230",
  },
  {
    name: "X / Twitter",
    handle: "x.com/_mayweather",
    href: "https://x.com/_mayweather",
    color: "#0a0a0a",
    bg: "#0a0a0a08",
    border: "#0a0a0a20",
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

export default function SocialNetworks() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 border-t border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#e94560] font-semibold mb-3">Social Networks</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-16">
            Where to <span className="gradient-text">Find Me</span>
          </h2>

          <div className="divide-y divide-[#e2e8f0]">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 md:py-8 group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125 duration-200"
                    style={{ backgroundColor: social.color }}
                  />
                  <div>
                    <span className="text-xl md:text-2xl font-semibold text-[#0a0a0a] group-hover:text-[#0f3460] transition-colors">
                      {social.name}
                    </span>
                    <p className="text-sm text-[#9ca3af] mt-0.5">{social.handle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full hidden md:inline-block"
                    style={{ color: social.color, backgroundColor: social.bg, border: `1px solid ${social.border}` }}
                  >
                    Follow
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#cbd5e1] group-hover:text-[#0f3460] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
