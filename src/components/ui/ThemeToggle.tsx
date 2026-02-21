import { FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { ThemeToggleProps } from "../../types";

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface-200 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-300 dark:hover:bg-surface-700 transition-all hover:scale-110 active:scale-90"
      aria-label={t("a11y.toggleTheme")}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
