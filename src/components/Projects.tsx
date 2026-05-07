"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Reliable Center",
    type: "Childcare Center",
    year: "2026",
    href: "https://karta.framer.website",
    image: "/project1-img.png",
    logo: "/project1-logo.svg",
    roles: [
      { label: "Entrepreneur", bg: "rgb(232, 234, 237)", text: "rgb(0, 0, 0)" },
      { label: "Investor", bg: "rgb(150, 183, 200)", text: "rgb(255, 255, 255)" },
    ],
  },
  {
    name: "Lumina Auto",
    type: "Auto Center",
    year: "2025",
    href: "https://astralab.framer.website",
    image: "/project2-img.png",
    logo: "/project2-logo.svg",
    roles: [
      { label: "Investor", bg: "rgb(150, 183, 200)", text: "rgb(255, 255, 255)" },
      { label: "Business Partner", bg: "rgb(136, 95, 168)", text: "rgb(255, 255, 255)" },
    ],
  },
  {
    name: "Department of Function",
    type: "Healthcare Organization",
    year: "2024",
    href: "https://realagent.framer.website",
    image: "/project3-img.png",
    logo: "/project3-logo.svg",
    roles: [
      { label: "Advisor", bg: "rgb(218, 234, 86)", text: "rgb(0, 0, 0)" },
      { label: "Entrepreneur", bg: "rgb(232, 234, 237)", text: "rgb(0, 0, 0)" },
    ],
  },
];

const carouselItems = [
  { image: "/carousel1.png", logo: "/carousel1-logo.svg" },
  { image: "/carousel2.png", logo: "/carousel2-logo.svg" },
  { image: "/carousel3.png", logo: "/carousel3-logo.svg" },
  { image: "/carousel4.png", logo: "/carousel4-logo.svg" },
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
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "rgb(16, 16, 16)" }}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "url('/projects-dots.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "60px auto",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div ref={ref}>
          {/* Header */}
          <div className="text-center mb-6">
            <h6 className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Projects
            </h6>
            <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-white mb-5">
              What I&apos;m Proud of
            </h2>
          </div>
          <p className="text-center text-sm sm:text-base text-[rgb(193,200,201)] max-w-lg mx-auto mb-16 md:mb-20 leading-relaxed">
            These are projects I&apos;ve created, actively contributed to, or
            supported as an investor and partner.
          </p>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Project name and info */}
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:opacity-80 transition-opacity">
                      {project.name}
                    </h3>
                    <div className="flex items-center justify-center gap-3 text-sm text-[rgb(193,200,201)]">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Circular image with spinning ellipse and logo */}
                  <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[260px] md:h-[260px] lg:w-[310px] lg:h-[310px] mb-6">
                    {/* Spinning dashed ellipse */}
                    <img
                      src="/project-ellipse.png"
                      alt=""
                      className="absolute top-1/2 left-1/2 w-[110%] h-[110%] animate-spin-slow pointer-events-none"
                    />

                    {/* Main circular card */}
                    <div
                      className="absolute top-1/2 left-1/2 w-[85%] h-[85%] rounded-full overflow-hidden"
                      style={{
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgb(232, 234, 237)",
                      }}
                    >
                      {/* Logo at top */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-12 h-8">
                        <Image
                          src={project.logo}
                          alt=""
                          width={62}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/10 rounded-lg z-[1]" />
                      {/* Project image */}
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={640}
                          height={640}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.roles.map((role) => (
                      <span
                        key={role.label}
                        className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-[20px]"
                        style={{
                          backgroundColor: role.bg,
                          color: role.text,
                        }}
                      >
                        {role.label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Other projects heading */}
          <h4 className="text-center text-lg sm:text-xl font-semibold text-white mb-10">
            Other projects
          </h4>

          {/* Infinite carousel */}
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[rgb(16,16,16)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[rgb(16,16,16)] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-carousel gap-[30px] w-max">
              {[...carouselItems, ...carouselItems, ...carouselItems, ...carouselItems].map(
                (item, i) => (
                  <div
                    key={i}
                    className="w-[300px] sm:w-[380px] md:w-[427px] h-[210px] sm:h-[260px] md:h-[297px] rounded-[10px] overflow-hidden relative shrink-0 group/card"
                  >
                    {/* Logo */}
                    <div className="absolute top-3 left-4 z-10 h-6 sm:h-8">
                      <img
                        src={item.logo}
                        alt=""
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/5 rounded-lg z-[1]" />
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt=""
                      width={854}
                      height={594}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
