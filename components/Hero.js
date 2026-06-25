"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { c } = useLanguage();
  const hero = c.hero;

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          {/* 직함 배지 */}
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
            {hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
            {hero.name}
            <span className="block text-2xl font-normal text-neutral-400 sm:text-3xl">
              {hero.nameEn}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:yyh@wpic.co"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent-strong"
            >
              {hero.contactBtn}
            </a>
            <a
              href="#projects"
              className="rounded-full border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
            >
              {hero.workBtn}
            </a>
          </div>
        </div>

        {/* 프로필 이미지 — public/images/proifle.jpg 를 실제 사진으로 교체하세요 */}
        <div className="animate-fade-up justify-self-center md:justify-self-end">
          <div className="relative">
            {/* 뒤쪽 포인트 컬러 블록 */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg bg-accent" />
            <div className="relative aspect-square w-56 overflow-hidden rounded-lg bg-neutral-100 sm:w-72 dark:bg-neutral-800">
              <Image
                src="/images/proifle.jpg"
                alt={hero.profileAlt}
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="scale-[1.35] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
