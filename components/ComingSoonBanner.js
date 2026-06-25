"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function ComingSoonBanner() {
  const { locale, c } = useLanguage();

  if (locale !== "en") return null;

  return (
    <div className="border-b border-accent-strong/30 bg-accent/90 px-6 py-2.5 text-center text-sm font-medium text-neutral-900">
      {c.comingSoon}
    </div>
  );
}
