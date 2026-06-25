"use client";

import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { c } = useLanguage();

  return (
    <Section
      id="experience"
      eyebrow={c.sections.experience.eyebrow}
      title={c.sections.experience.title}
    >
      <ol className="relative border-l border-neutral-200 dark:border-neutral-700">
        {c.experience.map((exp) => (
          <li key={exp.company} className="relative ml-6 pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-neutral-900 bg-white dark:border-accent dark:bg-neutral-950" />
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {exp.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
              {exp.company}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">{exp.role}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
