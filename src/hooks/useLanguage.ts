import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "../types";

export function useLanguage(): {
  language: Language;
  isRTL: boolean;
  toggleLanguage: () => void;
} {
  const { i18n } = useTranslation();
  const language: Language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const isRTL = language === "ar";

  useEffect(() => {
    const dir = isRTL ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language, isRTL]);

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(language === "ar" ? "en" : "ar");
  }, [i18n, language]);

  return { language, isRTL, toggleLanguage };
}
