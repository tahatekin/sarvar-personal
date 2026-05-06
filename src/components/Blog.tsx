"use client";

import { useRef, useEffect } from "react";

const posts = [
  {
    date: "Oct 12, 2025",
    title: "Interview on CBS: New business approach",
    href: "https://x.com/_mayweather",
  },
  {
    date: "Oct 12, 2025",
    title: "Article: How to implement business strategy",
    href: "https://x.com/_mayweather",
  },
  {
    date: "Oct 12, 2025",
    title: "News: What's new in an automobile industry",
    href: "https://x.com/_mayweather",
  },
  {
    date: "Oct 12, 2025",
    title: "Article: Reface implemented some new things",
    href: "https://x.com/_mayweather",
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

export default function Blog() {
  const ref = useReveal();

  return (
    <section id="blog" className="py-24 md:py-32 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={ref}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#999] mb-3">Blog</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight text-[#0a0a0a] mb-4">
            What I Share
          </h2>
          <p className="text-[#666] text-base md:text-lg max-w-xl mb-2 leading-relaxed">
            Here you can read my news, business insights, and other experiences.
          </p>
          <p className="text-[#666] text-base md:text-lg max-w-xl mb-16 leading-relaxed">
            It&apos;s incredibly important to share knowledge with those who have chosen the same path as you.
          </p>

          <div className="divide-y divide-[#e5e5e5]">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center justify-between py-7 gap-2 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <span className="text-sm text-[#999] shrink-0 tabular-nums">{post.date}</span>
                  <h3 className="text-base md:text-lg font-medium text-[#0a0a0a] group-hover:opacity-60 transition-opacity">
                    {post.title}
                  </h3>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-[#bbb] group-hover:text-[#0a0a0a] transition-colors shrink-0 group-hover:translate-x-1 duration-200 hidden md:block"
                >
                  <path
                    d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
