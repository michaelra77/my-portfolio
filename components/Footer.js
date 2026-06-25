"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { c } = useLanguage();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white">{c.footer.name}</span>
        </p>
        <a
          href={`mailto:${c.footer.email}`}
          className="transition-colors hover:text-accent"
        >
          {c.footer.email}
        </a>
      </div>
    </footer>
  );
}
