import Section from "./Section";

const experiences = [
  {
    period: "2024 — 현재",
    company: "WPIC Marketing Technologies",
    role: "퍼포먼스 마케터",
    tags: ["DA", "SA", "SEO", "기획", "인플루언서", "페이드"],
  },
  {
    period: "2022 — 2023",
    company: "하루인베스트 (Haru Invest)",
    role: "브랜드 마케터",
    tags: ["GA", "SEO", "기획", "온드", "인플루언서"],
  },
  {
    period: "2021 — 2022",
    company: "에코마케팅 (Eco Marketing)",
    role: "글로벌 퍼포먼스 마케터",
    tags: ["기획", "온드", "콘텐츠", "페이드"],
  },
  {
    period: "2020",
    company: "크리에이트립 (Creatrip)",
    role: "콘텐츠 마케터",
    tags: ["기획", "온드", "콘텐츠"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="경력">
      <ol className="relative border-l border-neutral-200">
        {experiences.map((exp) => (
          <li key={exp.company} className="relative ml-6 pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-neutral-900 bg-white" />
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {exp.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-neutral-900">
              {exp.company}
            </h3>
            <p className="text-neutral-600">{exp.role}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
