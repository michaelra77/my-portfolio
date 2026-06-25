import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata = {
  title: "양예희 (Ye Hee Yang) | Performance Marketer",
  description:
    "데이터와 콘텐츠로 성장을 만드는 퍼포먼스 마케터 양예희의 포트폴리오. WPIC Marketing Technologies.",
  openGraph: {
    title: "양예희 (Ye Hee Yang) | Performance Marketer",
    description:
      "데이터와 콘텐츠로 성장을 만드는 퍼포먼스 마케터 양예희의 포트폴리오.",
    type: "website",
  },
};

// 페인트 직전에 저장된 테마를 적용해 화면 깜빡임(FOUC) 방지
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
