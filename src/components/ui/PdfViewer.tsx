import { useEffect } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { PdfViewerProps } from "../../types";

export default function PdfViewer({ src, isOpen, onClose }: PdfViewerProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 max-w-full md:relative md:inset-auto md:w-[95vw] md:h-[90vh] md:max-w-5xl bg-white dark:bg-surface-900 rounded-none md:rounded-xl shadow-2xl overflow-hidden animate-[fade-in_0.2s_ease-out]"
        style={{ touchAction: "none", overscrollBehavior: "contain" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
          <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-200">
            {t("hero.viewCv")}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={src}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary-600 hover:bg-primary-700 text-white transition-colors"
            >
              <FiDownload size={14} />
              {t("hero.downloadCv")}
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-surface-500 hover:text-surface-800 dark:hover:text-white hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        <iframe
          src={src}
          title="CV"
          className="w-full h-[calc(100%-52px)] md:h-[calc(90vh-52px)]"
        />
      </div>
    </div>
  );
}
