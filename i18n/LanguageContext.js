"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getContent } from "./content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // 서버/초기 렌더는 항상 'ko' (콘텐츠는 en 미구현 시 ko 로 폴백되므로 mismatch 없음)
  const [locale, setLocale] = useState("ko");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale");
      if (saved === "en" || saved === "ko") setLocale(saved);
    } catch (e) {}
  }, []);

  function toggleLocale() {
    setLocale((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      try {
        localStorage.setItem("locale", next);
      } catch (e) {}
      return next;
    });
  }

  const value = {
    locale,
    toggleLocale,
    c: getContent(locale),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
