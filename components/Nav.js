"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Nav() {
  const { c } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          양예희
          <span className="text-neutral-400"> · Ye Hee Yang</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-8 text-sm text-neutral-500 sm:flex dark:text-neutral-400">
            {c.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <a
            href="mailto:yyh@wpic.co"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent-strong sm:inline-block"
          >
            {c.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
