"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

function logoSrc(dir, file) {
  // 파일명에 공백이 있어 URL 인코딩 처리
  return `/logos/brands/${dir}/${encodeURIComponent(file)}`;
}

function BrandLogo({ brand }) {
  const lightSrc = logoSrc("light", brand.file);
  // 다크 전용 로고가 없으면 light 로고로 폴백
  const darkSrc = logoSrc("dark", brand.darkFile ?? brand.file);

  return (
    <li className="flex flex-shrink-0 items-center">
      {/* 라이트 모드 로고 — 높이 고정, 너비는 비율에 맞게 자동 */}
      <Image
        src={lightSrc}
        alt={brand.name}
        width={200}
        height={48}
        style={{ width: "auto" }}
        className="h-8 object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-10 dark:hidden"
      />
      {/* 다크 모드 로고 — 높이 고정, 너비는 비율에 맞게 자동 */}
      <Image
        src={darkSrc}
        alt={brand.name}
        width={200}
        height={48}
        style={{ width: "auto" }}
        className="hidden h-8 object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-10 dark:block"
      />
    </li>
  );
}

export default function CompanyMarquee() {
  const { c } = useLanguage();
  // 끊김 없는 루프를 위해 동일 목록을 두 번 렌더링
  const loop = [...c.companies.items, ...c.companies.items];

  return (
    <section className="border-y border-neutral-100 bg-neutral-50/60 py-10 dark:border-neutral-800 dark:bg-neutral-900/40">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {c.companies.label}
      </p>
      <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-10 sm:gap-14">
          {loop.map((brand, i) => (
            <BrandLogo key={`${brand.file}-${i}`} brand={brand} />
          ))}
        </ul>
      </div>
    </section>
  );
}
