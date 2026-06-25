"use client";

import { useState } from "react";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

function ToolCard({ tool }) {
  // 이미지가 없거나 로드 실패하면 이름 텍스트만 표시
  const [hasImage, setHasImage] = useState(true);

  return (
    <li className="flex h-28 flex-col items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-center transition-colors hover:border-accent sm:h-32 dark:border-neutral-800 dark:bg-neutral-900">
      {hasImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/tools/${encodeURIComponent(tool.file)}`}
          alt={tool.name}
          onError={() => setHasImage(false)}
          className="h-8 w-auto object-contain sm:h-10"
        />
      )}
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {tool.name}
      </span>
    </li>
  );
}

export default function Tools() {
  const { c } = useLanguage();

  return (
    <Section
      id="tools"
      eyebrow={c.sections.tools.eyebrow}
      title={c.sections.tools.title}
    >
      <div className="space-y-10">
        {c.tools.map((group) => (
          <div key={group.category}>
            {/* 카테고리 제목 */}
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-400">
              {group.category}
            </h3>
            {/* 한 행에 3개 그리드 */}
            <ul className="grid grid-cols-3 gap-4 sm:gap-5">
              {group.items.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
