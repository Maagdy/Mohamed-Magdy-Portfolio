import type { Language, BilingualText, BilingualArray } from "../types";

export function localized(obj: BilingualText, lang: Language): string;
export function localized(obj: BilingualArray, lang: Language): string[];
export function localized(
  obj: BilingualText | BilingualArray,
  lang: Language
): string | string[] {
  if (!obj) return "";
  const val = obj[lang] ?? obj.en;
  return val ?? "";
}

export function formatNumber(num: number, lang: Language): string {
  return new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-US").format(num);
}
