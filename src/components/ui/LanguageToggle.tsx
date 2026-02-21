import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-surface-200 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-300 dark:hover:bg-surface-700 transition-all text-sm font-semibold min-w-[36px] hover:scale-110 active:scale-90"
      aria-label={language === "ar" ? t("a11y.switchToEnglish") : t("a11y.switchToArabic")}
    >
      {language === "ar" ? "EN" : "ع"}
    </button>
  );
}
