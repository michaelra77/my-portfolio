// 프로젝트 데이터의 단일 소스는 i18n/content.js 입니다.
// (프로젝트 상세 페이지는 서버 컴포넌트라 한국어 콘텐츠를 직접 사용합니다.)
import { content } from "@/i18n/content";

export const projects = content.ko.projects;

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
