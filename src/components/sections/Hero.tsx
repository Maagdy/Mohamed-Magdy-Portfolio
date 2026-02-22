import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FiEye, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import AnimatedBackground from "../ui/AnimatedBackground";
import PdfViewer from "../ui/PdfViewer";
import { personalInfo } from "../../data/personalInfo";
import { useLanguage } from "../../hooks/useLanguage";
import { localized } from "../../utils/i18nHelpers";

export default function Hero() {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const [showCv, setShowCv] = useState(false);
  const name = localized(personalInfo.name, language);
  const roles = localized(personalInfo.roles, language);
  const ArrowIcon = isRTL ? FiArrowLeft : FiArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p
          className="text-sm md:text-base font-medium text-primary-500 dark:text-primary-400 mb-4 animate-[hero-up_0.5s_ease-out_both]"
        >
          {t("hero.greeting")}
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-surface-900 dark:text-white mb-4 animate-[hero-up_0.6s_ease-out_0.1s_both]"
        >
          {name}
        </h1>

        <div
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-surface-600 dark:text-surface-400 mb-6 md:mb-8 min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3rem] animate-[hero-up_0.5s_ease-out_0.3s_both]"
        >
          <TypeAnimation
            key={language}
            sequence={roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
          />
        </div>

        <p
          className="max-w-2xl mx-auto text-surface-500 dark:text-surface-400 mb-8 md:mb-10 text-sm md:text-base leading-relaxed animate-[fade-in_0.5s_ease-out_0.5s_both]"
        >
          {t("hero.tagline")}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[hero-up_0.5s_ease-out_0.7s_both]"
        >
          <Button
            onClick={() => setShowCv(true)}
            variant="primary"
          >
            <FiEye size={18} />
            {t("hero.viewCv")}
          </Button>
          <Link to="projects" smooth duration={500} offset={-70}>
            <Button variant="outline">
              {t("hero.viewProjects")}
              <ArrowIcon size={18} />
            </Button>
          </Link>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex animate-[fade-in_0.5s_ease-out_1.2s_both]"
        >
          <div
            className="w-6 h-10 rounded-full border-2 border-surface-400 dark:border-surface-600 flex items-start justify-center pt-2 animate-[scroll-hint_1.5s_ease-in-out_infinite]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
          </div>
        </div>
      </div>

      <PdfViewer
        src={personalInfo.cvPath}
        isOpen={showCv}
        onClose={() => setShowCv(false)}
      />
    </section>
  );
}
