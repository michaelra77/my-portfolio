// ─────────────────────────────────────────────────────────────
// 다국어 콘텐츠 단일 소스
//
// 영문(en)을 추가하려면 아래 `en: null` 을 `ko` 와 동일한 구조의
// 객체로 채우기만 하면 됩니다. (en 에 없는 항목은 자동으로 ko 로 폴백)
//   예) en: { nav: {...}, hero: {...}, projects: [...], ... }
// 컴포넌트는 useLanguage().c 로 현재 언어의 콘텐츠를 읽습니다.
// ─────────────────────────────────────────────────────────────

const ko = {
  nav: {
    links: [
      { href: "#what-i-do", label: "What I Do" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
    ],
    contact: "Contact Me",
  },

  // EN 전환 시 노출되는 안내 배너 (영문 콘텐츠 준비 전까지)
  comingSoon:
    "English version is coming soon — 현재는 한국어 콘텐츠가 표시됩니다.",

  hero: {
    badge: "Global Marketing Strategist",
    name: "양예희",
    nameEn: "Ye Hee Yang",
    intro:
      "시장의 경계를 넘어 글로벌 메시지를 로컬 정서에 맞게 재정의하고, 데이터 지표와 킬러 콘텐츠로 실질적인 구매 전환을 만들어내는 글로벌 마케팅 전략가 입니다.",
    contactBtn: "Contact Me",
    workBtn: "View My Work",
    profileAlt: "양예희 프로필 사진",
  },

  // 함께한 브랜드 (로고 마퀴) — 협업한 브랜드 로고
  // file = public/logos/brands/light, darkFile = public/logos/brands/dark
  // 라이트/다크 모드에 따라 자동으로 전환됩니다.
  companies: {
    label: "함께한 브랜드",
    items: [
      {
        name: "IDC Dermo",
        file: "IDC Dermo_logo.png",
        darkFile: "IDC-Logo-Horizontal_White.png",
      },
      { name: "Loop", file: "loop_logo.png", darkFile: "loop_logo.png" },
      {
        name: "Nanit",
        file: "NANIT_logo.jpg",
        darkFile: "NANIT-CORE-LOGOTYPE-WHITE.png",
      },
      {
        name: "Owala",
        file: "owala_logo.png",
        darkFile: "Owala_Owala Logo-white.png",
      },
      { name: "Topologie", file: "Topologie_logo.png", darkFile: "Red.png" },
      {
        name: "Finger Suit",
        file: "FS_logo.png",
        darkFile: "FS_logo.png",
      },
      {
        name: "Creatrip",
        file: "Creatrip_logo.png",
        darkFile: "Creatrip_logo.png",
      },
      {
        name: "ohora",
        file: "ohora_logo.png",
        darkFile: "ohora-logo-PURESEOUL-UK-kbeauty-store.avif",
      },
      {
        name: "Haru Invest",
        file: "Haru Invest_logo.png",
        darkFile: "haru_logo.png",
      },
    ],
  },

  sections: {
    whatIDo: { eyebrow: "What I Do", title: "What I Do" },
    experience: { eyebrow: "Experience", title: "경력" },
    projects: { eyebrow: "Projects", title: "주요 프로젝트", cta: "자세히 보기" },
    tools: { eyebrow: "Tools", title: "사용 툴" },
    skills: { eyebrow: "Skills", title: "보유 역량" },
  },

  // 5개 강점 (What I Do)
  // desc 는 세그먼트 배열 — 문자열은 일반 텍스트, { b: "..." } 는 bold 처리됩니다.
  whatIDo: [
    {
      key: "cross-border",
      title: "Cross-Border Marketing (Global ↔ Korea)",
      desc: [
        "글로벌 브랜드의 국내 진입을 위한 현지화 전략 (Global-to-Korea)부터, 국내 브랜드의 해외 시장 진출 전략 (Korea-to-Global)까지 ",
        { b: "시장의 경계를 넘나들며 양방향으로 캠페인을 설계하고 실행" },
        "합니다.",
      ],
    },
    {
      key: "ai-workflows",
      title: "AI Powered Marketing Workflows",
      desc: [
        "다양한 ",
        { b: "AI 툴을 나만의 맞춤형 시스템으로 커스텀" },
        "하여 리서치, 고객사 리포트 자동화, 광고 카피 생성 및 캠페인 최적화까지 전체 마케팅 워크플로우의 효율성을 극대화합니다.",
      ],
    },
    {
      key: "cross-functional",
      title: "Cross-Functional Campaign Leadership",
      desc: [
        "마케팅, 콘텐츠, 광고 운영, 인플루언서 시딩 및 관리까지 ",
        { b: "캠페인의 전 과정을 유기적으로 연결하고 조율" },
        "하며, ",
        { b: "팀원간의 협업" },
        "을 이끌어내고 성과를 만들어냅니다.",
      ],
    },
    {
      key: "tech-expertise",
      title: "Tech Industry Marketing Expertise",
      desc: [
        "디지털 자산 및 핀테크 등 진입 장벽이 높은 서비스를 대중의 눈높이에 맞춰 '",
        { b: "이해하기 쉽고 소비하고 싶은 콘텐츠" },
        "'로 전환하여, ",
        { b: "실질적인 유저 유입과 전환" },
        "을 이끌어냅니다.",
      ],
    },
    {
      key: "ecommerce-expertise",
      title: "E-Commerce Industry Marketing Expertise",
      desc: [
        "퍼포먼스 광고와 콘텐츠 기획, 인플루언서 협업까지 아우르는 ",
        { b: "풀퍼널(Full-Funnel) 마케팅" },
        "을 통해 ",
        { b: "인지도 제고부터 실질적인" },
        " 구매 전환까지, 이커머스 비즈니스의 매출 성과를 견인합니다.",
      ],
    },
  ],

  experience: [
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
  ],

  projects: [
    {
      slug: "wpic",
      company: "WPIC Marketing",
      period: "2024 — 현재",
      title: "신규 브랜드 한국 시장 런칭 & 퍼포먼스 마케팅 리드",
      summary:
        "신규 글로벌 브랜드의 한국 시장 진입을 퍼포먼스 마케팅 전반에서 단독으로 리드했습니다.",
      image: "/images/project-wpic-1.png",
      gallery: [
        "/images/project-wpic-2.png",
        "/images/project-wpic-3.png",
        "/images/project-wpic-4.png",
      ],
      highlights: [
        { value: "10억원", label: "N사 6개월 누적 매출" },
        { value: "320%", label: "T사 ROAS · 8개월 유지" },
        { value: "10배", label: "라이브 매출 성장 (전월 대비)" },
      ],
      cases: [
        {
          name: "N사 계정",
          summary:
            "신규 브랜드 한국 시장 런칭부터 퍼포먼스 마케팅 전반을 단독 리드",
          results: [
            "6개월 만에 누적 매출 10억원 달성",
            "평균 ROAS 200% 유지",
            "런칭 초기 대비 신규 유입 135% 성장",
            "라이브 방송 1시간 1,600만원 매출 달성 (전월 대비 10배)",
          ],
          role: "Meta Ads 운영 · 네이버 검색/브랜드 광고 · 인플루언서 협업 · 쇼핑 라이브",
        },
        {
          name: "T사 계정",
          summary: "퍼포먼스 마케팅 기반 매출 성장과 브랜드 인지도 확산",
          results: ["8개월간 ROAS 320% 유지", "누적 매출 5억원 달성"],
          role: "Meta 캠페인 구조 설계 · 인플루언서 협업 · 크리에이티브 기획",
        },
        {
          name: "L사 쿠팡",
          summary: "운영 초기 대비 매출 4배 성장",
          results: [],
          role: "",
        },
      ],
      tags: ["Meta Ads", "네이버 SA", "쇼핑라이브", "인플루언서", "DA / SA"],
    },
    {
      slug: "haru",
      company: "하루인베스트 (Haru Invest)",
      period: "2022 — 2023",
      team: "그로쓰팀 (브랜드 커뮤니케이션)",
      title: "블로그·SEO·인플루언서 채널 기반 브랜드 그로쓰",
      summary:
        "그로쓰팀에서 브랜드 커뮤니케이션을 담당하며 블로그·SEO·인플루언서 채널로 유입과 가입 전환을 성장시켰습니다.",
      image: "/images/project-haru-1.png",
      gallery: ["/images/project-haru-2.png"],
      highlights: [
        { value: "+135%", label: "블로그 UV 증가 (7개월)" },
        { value: "+150%", label: "인플루언서 캠페인 가입율 개선" },
      ],
      cases: [
        {
          name: "블로그",
          summary:
            "신규 상품·프로덕트 런칭에 맞춰 블로그 콘텐츠를 기획·작성·발행하고, 데이터 기반으로 전환 플로우를 구축",
          results: [
            "신규 상품/프로덕트 런칭 시 블로그 콘텐츠 기획·작성·발행",
            "7개월 만에 UV 135% 증가",
            "리포트 분석 기반 Action Plan 도출",
            "외부 유입에서 전환까지 이어지는 플로우 구축",
          ],
          role: "콘텐츠 기획 · 작성 · 발행 · 성과 분석",
        },
        {
          name: "인플루언서 & 앰배서더",
          summary:
            "암호화폐·경제 인플루언서 협업으로 유저 유입과 가입 전환을 견인",
          results: [
            "암호화폐/경제 인플루언서 15명과 협업, 매달 3-4건 콘텐츠 기획",
            "프로모션 집행 시 유저 유입·가입율 150% 개선",
            "텔레그램·트위터·유튜브 캠페인 집행",
            "남미권 스페인어 시장 인플루언서 발굴 및 콘텐츠 제작",
          ],
          role: "인플루언서 발굴·협업 · 캠페인 기획 및 집행",
        },
        {
          name: "SEO",
          summary:
            "SEO 콘텐츠 파이프라인을 구축하여 오가닉 트래픽과 전환을 동시에 확보",
          results: [
            "SEO 콘텐츠 파이프라인 구축, 오가닉 블로그 방문자 135% 증가",
            "매주 아티클 3건·백링크 1건 구축하여 Authority Score 관리",
            "리스팅 사이트 발굴 및 콘텐츠 관리로 가입/예치 전환 유도",
          ],
          role: "SEO 전략 · 콘텐츠 파이프라인 · 백링크/Authority 관리",
        },
      ],
      tags: ["GA", "SEO", "기획", "온드", "인플루언서"],
    },
    {
      slug: "echo",
      company: "에코마케팅",
      period: "2021 — 2022",
      title: "Vanity Table (ohora) 북미 퍼포먼스 마케팅",
      summary:
        "ohora 브랜드의 북미 시장 퍼포먼스 광고를 운영하며 효율과 채널 성장을 동시에 견인했습니다.",
      image: "/images/project-ohora-1.png",
      gallery: ["/images/project-ohora-2.png", "/images/project-ohora-3.png"],
      highlights: [
        { value: "-40%", label: "CPA 개선" },
        { value: "+225%", label: "Instagram 팔로워 (68K → 154K)" },
      ],
      cases: [
        {
          name: "",
          summary:
            "ohora 브랜드의 북미 시장 퍼포먼스 광고를 운영하며 효율과 채널 성장을 동시에 견인",
          results: ["CPA 40% 개선", "Instagram 팔로워 225% 성장 (68K → 154K)"],
          role: "Facebook / Instagram 광고 운영 · 크리에이티브 기획 · 온드 채널 운영",
        },
      ],
      tags: ["Meta Ads", "퍼포먼스", "크리에이티브", "글로벌"],
    },
    {
      slug: "creatrip",
      company: "크리에이트립",
      period: "2020",
      title: "한국 여행·문화 영문 콘텐츠 기획 및 SNS 운영",
      summary:
        "해외 이용자를 대상으로 한 영문 콘텐츠를 기획·제작하고 SNS 채널을 성장시켰습니다.",
      image: "/images/project-creatrip-1.png",
      gallery: [
        "/images/project-creatrip-2.png",
        "/images/project-creatrip-3.png",
        "/images/project-creatrip-4.png",
      ],
      highlights: [
        { value: "+475%", label: "Instagram 팔로워 (4K → 19K · 7개월)" },
        { value: "8건", label: "대구관광뷰로 브랜디드 콘텐츠" },
      ],
      cases: [
        {
          name: "",
          summary:
            "해외 이용자를 대상으로 한 영문 콘텐츠를 기획·제작하고 SNS 채널을 성장시킴",
          results: [
            "Instagram 팔로워 475% 성장 (4K → 19K, 7개월)",
            "한국 여행/문화 영문 콘텐츠 기획 및 제작",
            "대구관광뷰로 브랜디드 콘텐츠 8건 제작",
          ],
          role: "콘텐츠 기획 · 영문 카피 · SNS 채널 운영",
        },
      ],
      tags: ["콘텐츠 기획", "영문 콘텐츠", "SNS", "브랜디드 콘텐츠"],
    },
  ],

  // 사용 툴 (Tools) — 카테고리별 그리드 (한 행에 3개)
  // 로고 이미지는 public/logos/tools/ 에 넣고 file 명을 맞춰주세요.
  // 이미지가 없으면 카드에 툴 이름 텍스트만 표시됩니다.
  tools: [
    {
      category: "AI 툴",
      items: [
        { name: "Claude (Opus 4.8)", file: "claude.png" },
        { name: "ChatGPT (GPT-5.5)", file: "Chat GPT.png" },
        { name: "Gemini (3.1 Pro)", file: "Gemini.png" },
      ],
    },
    {
      category: "마케팅/광고",
      items: [
        { name: "Meta Ads Manager", file: "Meta.png" },
        { name: "Google Analytics", file: "Google Analytics.png" },
        { name: "Semrush", file: "Semrush.png" },
      ],
    },
    {
      category: "협업/생산성",
      items: [
        { name: "Notion", file: "Notion.png" },
        { name: "Trello", file: "Trello.png" },
        { name: "Canva", file: "Canva.png" },
      ],
    },
    {
      category: "이미지/영상 툴",
      items: [
        { name: "Midjourney", file: "Midjourney.png" },
        { name: "Figma", file: "Figma.png" },
        { name: "CapCut", file: "Capcut.png" },
        { name: "Final Cut Pro", file: "FinalCut Pro.png" },
      ],
    },
  ],

  skills: [
    "DA",
    "SA",
    "SEO",
    "콘텐츠 기획",
    "인플루언서 마케팅",
    "퍼포먼스 마케팅",
    "Google Analytics",
    "Meta Ads",
    "쇼핑라이브",
  ],

  contact: {
    eyebrow: "Contact",
    title: "함께 일해요",
    desc: "새로운 프로젝트나 협업 제안이 있으시면 언제든 편하게 연락 주세요. 브랜드의 다음 성장을 함께 고민하겠습니다.",
    email: "yyh@wpic.co",
  },

  footer: {
    name: "양예희 (Ye Hee Yang)",
    email: "yyh@wpic.co",
  },
};

// 영문 콘텐츠는 아직 준비 전 — ko 와 동일한 구조로 채우면 자동 적용됩니다.
const en = null;

export const content = { ko, en };

// 현재 로케일의 콘텐츠를 반환 (en 이 비어있으면 ko 로 폴백)
export function getContent(locale) {
  return content[locale] ?? content.ko;
}
