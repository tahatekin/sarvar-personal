"use client";

import { useRef, useEffect } from "react";

const projects = [
  {
    name: "Reliable Center",
    type: "Childcare Center",
    year: "2026",
    roles: ["Entrepreneur", "Investor"],
    href: "https://karta.framer.website",
    roleColors: ["#e94560", "#0f3460"],
  },
  {
    name: "Lumina Auto",
    type: "Auto Center",
    year: "2025",
    roles: ["Investor", "Business Partner"],
    href: "https://astralab.framer.website",
    roleColors: ["#0f3460", "#1a1a2e"],
  },
  {
    name: "Department of Function",
    type: "Healthcare Organization",
    year: "2024",
    roles: ["Advisor", "Entrepreneur"],
    href: "https://realagent.framer.website",
    roleColors: ["#16213e", "#e94560"],
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

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#e2e8f0]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#e94560] font-semibold mb-3">Projects</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-4">
            What I&apos;m <span className="gradient-text">Proud of</span>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-lg mb-16 leading-relaxed">
            These are projects I&apos;ve created, actively contributed to, or supported as an investor and partner.
          </p>

          <div className="divide-y divide-[#e2e8f0]">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 gap-4 group card-hover rounded-lg -mx-4 px-4"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <span className="text-5xl md:text-6xl font-bold tabular-nums leading-none transition-all duration-300"
                    style={{ color: "#e2e8f0" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#cbd5e1")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#e2e8f0")}
                  >
                    {project.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a0a0a] group-hover:text-[#0f3460] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#9ca3af] mt-0.5">{project.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {project.roles.map((role, i) => (
                      <span
                        key={role}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{
                          color: project.roleColors[i],
                          borderColor: project.roleColors[i] + "40",
                          backgroundColor: project.roleColors[i] + "10",
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="text-[#cbd5e1] group-hover:text-[#0f3460] transition-colors shrink-0 ml-2 group-hover:translate-x-1 duration-200"
                  >
                    <path
                      d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5"
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

          <div className="mt-10">
            <button className="text-sm text-[#6b7280] hover:text-[#0f3460] transition-colors flex items-center gap-2 group">
              Other projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
