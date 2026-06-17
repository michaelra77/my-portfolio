import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | 양예희 (Ye Hee Yang)`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {/* 뒤로가기 */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <span aria-hidden="true">←</span>
        프로젝트 목록으로
      </Link>

      {/* 헤더 */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-neutral-900">
            {project.company}
          </span>
          <p className="text-xs text-neutral-400">{project.period}</p>
          {project.team && (
            <>
              <span className="text-neutral-300">·</span>
              <p className="text-xs text-neutral-400">{project.team}</p>
            </>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* 대표 이미지 */}
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={project.image}
          alt={`${project.title} 대표 이미지`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      {/* 핵심 성과 수치 */}
      <section className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Key Results
        </h2>
        <dl className="mt-5 grid gap-6 sm:grid-cols-3">
          {project.highlights.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-accent"
            >
              <span className="mb-4 block h-1 w-8 rounded-full bg-accent" />
              <dt className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-neutral-500">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 상세 설명 */}
      <section className="mt-14">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Details
        </h2>
        <div className="mt-6 space-y-10">
          {project.cases.map((c, i) => (
            <div
              key={c.name || i}
              className="border-l-2 border-accent pl-6"
            >
              {c.name && (
                <h3 className="text-lg font-semibold text-neutral-900">
                  {c.name}
                </h3>
              )}
              <p className="mt-1 leading-relaxed text-neutral-600">
                {c.summary}
              </p>

              {c.results.length > 0 && (
                <>
                  <p className="mt-5 text-sm font-medium text-neutral-900">
                    성과
                  </p>
                  <ul className="mt-2 space-y-2">
                    {c.results.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2.5 leading-relaxed text-neutral-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {c.role && (
                <>
                  <p className="mt-5 text-sm font-medium text-neutral-900">
                    수행 업무 · 역할
                  </p>
                  <p className="mt-2 leading-relaxed text-neutral-600">
                    {c.role}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 갤러리 */}
      {project.gallery?.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Gallery
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100"
              >
                <Image
                  src={src}
                  alt={`${project.title} 갤러리 이미지 ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 하단 뒤로가기 */}
      <div className="mt-16 border-t border-neutral-100 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent-strong"
        >
          <span aria-hidden="true">←</span>
          프로젝트 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
