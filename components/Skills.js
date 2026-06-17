import Section from "./Section";

const skills = [
  "DA",
  "SA",
  "SEO",
  "콘텐츠 기획",
  "인플루언서 마케팅",
  "퍼포먼스 마케팅",
  "Google Analytics",
  "Meta Ads",
  "쇼핑라이브",
];

function SkillPill({ label }) {
  return (
    <li className="flex flex-shrink-0 items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800">
      {/* 아이콘 */}
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
        <svg
          viewBox="0 0 12 12"
          className="h-3 w-3 text-neutral-900"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 6.2l2.2 2.3L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
}

export default function Skills() {
  // 끊김 없는 루프를 위해 동일 목록을 두 번 렌더링
  const loop = [...skills, ...skills];

  return (
    <Section id="skills" eyebrow="Skills" title="보유 역량">
      <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="animate-marquee flex w-max gap-4">
          {loop.map((skill, i) => (
            <SkillPill key={`${skill}-${i}`} label={skill} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
