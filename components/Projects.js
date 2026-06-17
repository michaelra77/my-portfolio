import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="주요 프로젝트">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            {/* 썸네일 — public/images/ 의 파일을 실제 이미지로 교체하세요 */}
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
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
              <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">
                {project.title}
              </h3>

              {/* 핵심 성과 수치 강조 */}
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-neutral-100 py-4">
                {project.highlights.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11px] leading-relaxed text-neutral-500">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-600">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900">
                자세히 보기
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
