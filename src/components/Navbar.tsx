"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf8]/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-sm font-bold tracking-[0.3em] uppercase text-[#1a1a2e] hover:opacity-70 transition-opacity"
        >
          Prolens
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#555] hover:text-[#0f3460] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e94560] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="text-sm font-medium tracking-[0.2em] uppercase bg-[#1a1a2e] text-white px-4 py-2 rounded-lg hover:bg-[#0f3460] transition-colors"
        >
          Contacts
        </a>
      </div>
    </header>
  );
}
