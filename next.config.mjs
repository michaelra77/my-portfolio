/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // placeholder SVG 렌더링 허용 (자체 제작 SVG라 안전).
    // 실제 사진(jpg/png)으로 교체 후에는 이 설정을 제거해도 됩니다.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
