"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { c } = useLanguage();
  const contact = c.contact;

  return (
    <section id="contact" className="bg-neutral-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <span className="mt-4 h-1 w-12 rounded-full bg-accent" />

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-300">
            {contact.desc}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-neutral-900 transition-colors hover:bg-accent-strong"
          >
            {contact.email}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
