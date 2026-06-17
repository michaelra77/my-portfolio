const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-neutral-900"
        >
          양예희
          <span className="text-neutral-400"> · Ye Hee Yang</span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-sm text-neutral-500 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:yyh@wpic.co"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent-strong"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
