import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-40 p-2.5 sm:p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all duration-300 hover:scale-110 active:scale-90 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
      }`}
      aria-label={t("a11y.scrollToTop")}
    >
      <FiArrowUp size={20} />
    </button>
  );
}
