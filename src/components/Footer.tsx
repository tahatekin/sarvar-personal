export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e5e5e5] py-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase font-medium text-[#0a0a0a] mb-1">
              Prolens
            </p>
            <p className="text-xs text-[#999]">© {year} Dave Richardson. All rights reserved.</p>
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
                className="text-sm text-[#999] hover:text-[#0a0a0a] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
