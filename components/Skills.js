"use client";

import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

function SkillPill({ label }) {
  return (
    <li className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
      {/* 아이콘 */}
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
        <svg
          viewBox="0 0 12 12"
          className="h-3 w-3 text-neutral-900"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 6.2l2.2 2.3L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
}

export default function Skills() {
  const { c } = useLanguage();
  // 끊김 없는 루프를 위해 동일 목록을 두 번 렌더링
  const loop = [...c.skills, ...c.skills];

  return (
    <Section
      id="skills"
      eyebrow={c.sections.skills.eyebrow}
      title={c.sections.skills.title}
    >
      <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="animate-marquee flex w-max gap-4">
          {loop.map((skill, i) => (
            <SkillPill key={`${skill}-${i}`} label={skill} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
