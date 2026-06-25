"use client";

import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

// 강점 key 별 아이콘 — 나중에 필요하면 자유롭게 교체하세요.
const ICONS = {
  "cross-border": (
    <path
      d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.4 3.9 5.6 4 9-.1 3.4-1.5 6.6-4 9-2.5-2.4-3.9-5.6-4-9 .1-3.4 1.5-6.6 4-9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "ai-workflows": (
    <path
      d="M13 2L10.6 8.6 4 11l6.6 2.4L13 20l2.4-6.6L22 11l-6.6-2.4L13 2zM5 3.5l-.7 1.8L2.5 6l1.8.7L5 8.5l.7-1.8L7.5 6l-1.8-.7L5 3.5z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "cross-functional": (
    <path
      d="M9 11a3 3 0 100-6 3 3 0 000 6zm9 0a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M15 20a6 6 0 016-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "tech-expertise": (
    <path
      d="M9 18l-6-6 6-6m6 12l6-6-6-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "ecommerce-expertise": (
    <path
      d="M3 4h2l2.5 12.5A2 2 0 009.5 18h8a2 2 0 002-1.6L21 8H6m3 14a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function StrengthCard({ item }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-accent sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
      {/* 아이콘 */}
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-strong dark:bg-accent/20 dark:text-accent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {ICONS[item.key]}
        </svg>
      </span>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {item.desc.map((seg, i) =>
          typeof seg === "string" ? (
            seg
          ) : (
            <strong
              key={i}
              className="font-semibold text-neutral-900 dark:text-white"
            >
              {seg.b}
            </strong>
          )
        )}
      </p>
    </div>
  );
}

export default function WhatIDo() {
  const { c } = useLanguage();

  return (
    <Section
      id="what-i-do"
      eyebrow={c.sections.whatIDo.eyebrow}
      title={c.sections.whatIDo.title}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {c.whatIDo.map((item) => (
          <StrengthCard key={item.key} item={item} />
        ))}
      </div>
    </Section>
  );
}
