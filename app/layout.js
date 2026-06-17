import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
