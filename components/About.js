import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="소개">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
          <p>
            콘텐츠 기획에서 시작해 글로벌 퍼포먼스 마케팅까지, 마케팅의 전 과정을
            경험해 온 퍼포먼스 마케터입니다. 브랜드의 메시지를 명확히 다듬고,
            데이터를 근거로 채널을 최적화하여 실질적인 성과로 연결하는 일을
            좋아합니다.
          </p>
          <p>
            크리에이트립에서의 콘텐츠 기획, 에코마케팅에서의 글로벌 퍼포먼스 광고
            운영, 하루인베스트에서의 브랜드·SEO 경험을 거쳐, 현재 WPIC Marketing
            Technologies에서 DA·SA·SEO와 인플루언서 캠페인을 아우르는 퍼포먼스
            마케팅을 담당하고 있습니다.
          </p>
          <p>
            국내와 글로벌 시장을 모두 다뤄 본 경험을 바탕으로, 채널별 특성에 맞는
            전략과 콘텐츠로 브랜드의 성장을 만들어 갑니다.
          </p>
        </div>
        <ul className="space-y-4 text-sm text-neutral-500">
          <li className="flex flex-col">
            <span className="text-neutral-900">현재</span>
            WPIC Marketing Technologies · 퍼포먼스 마케터
          </li>
          <li className="flex flex-col">
            <span className="text-neutral-900">전문 분야</span>
            퍼포먼스 광고 · 콘텐츠 기획 · 인플루언서 마케팅
          </li>
          <li className="flex flex-col">
            <span className="text-neutral-900">경력</span>
            2020 – 현재 · 4개 기업
          </li>
        </ul>
      </div>
    </Section>
  );
}
