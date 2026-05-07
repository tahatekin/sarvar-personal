export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] py-10 bg-[#fafaf8]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase font-bold text-[#1a1a2e] mb-1">
              Prolens
            </p>
            <p className="text-xs text-[#9ca3af]">© {year} Dave Richardson. All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Career", href: "#career" },
              { label: "Blog", href: "#blog" },
              { label: "Contacts", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#9ca3af] hover:text-[#0f3460] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e94560] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
