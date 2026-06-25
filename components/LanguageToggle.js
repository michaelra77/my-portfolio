"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  // 클릭 시 전환될 언어를 라벨로 표시 (ko → "EN", en → "KO")
  const nextLabel = locale === "ko" ? "EN" : "KO";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={
        locale === "ko" ? "Switch to English" : "한국어로 전환"
      }
      className="flex h-9 items-center justify-center rounded-full border border-neutral-200 px-3 text-xs font-semibold text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-accent dark:hover:text-accent"
    >
      {nextLabel}
    </button>
  );
}
