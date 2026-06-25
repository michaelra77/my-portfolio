"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { c } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={c.sections.projects.eyebrow}
      title={c.sections.projects.title}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {c.projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:border-neutral-800 dark:hover:shadow-accent/10 dark:focus-visible:ring-accent dark:focus-visible:ring-offset-neutral-950"
          >
            {/* 썸네일 — public/images/ 의 파일을 실제 이미지로 교체하세요 */}
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={`${project.title} 프로젝트 이미지`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-neutral-900">
                {project.company}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs text-neutral-400">{project.period}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900 dark:text-white">
                {project.title}
              </h3>

              {/* 핵심 성과 수치 강조 */}
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-neutral-100 py-4 dark:border-neutral-800">
                {project.highlights.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
                {c.sections.projects.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="ml-1 h-2 w-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
