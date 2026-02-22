import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: { en: "Yaqeen", ar: "يقين" },
    description: {
      en: "A comprehensive Islamic knowledge platform with multiple Quran reading modes, 100+ audio reciters, tafsir, hadith collections, prayer times, bookmarks, and global search. Fully bilingual Arabic/English with RTL support and dark/light themes.",
      ar: "منصة شاملة للمعرفة الإسلامية مع أوضاع قراءة متعددة للقرآن، وأكثر من ١٠٠ قارئ صوتي، وتفسير، ومجموعات حديث، ومواقيت الصلاة، والمفضلة، والبحث الشامل. ثنائية اللغة بالكامل عربي/إنجليزي مع دعم RTL وسمات فاتحة/داكنة.",
    },
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "i18next",
    ],
    image: "/projects/yaqeen.webp",
    github: "https://github.com/Maagdy/yaqeen",
    live: "https://yaqeen.site",
  },
  {
    title: { en: "This Portfolio", ar: "هذا الموقع" },
    description: {
      en: "Wait... you're already here. But sure, click Live Demo if you want to see it again.",
      ar: "انتظر... أنت هنا بالفعل. لكن بالتأكيد، اضغط على العرض المباشر إذا أردت رؤيته مرة أخرى.",
    },
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/projects/mohamed-magdy-portfolio.webp",
    github: "https://github.com/Maagdy/Mohamed-Magdy-Portfolio",
    live: "#hero",
  },
  {
    title: { en: "Smartwatches", ar: "ساعات ذكية" },
    description: {
      en: "A React e-commerce store for smartwatches featuring product browsing, quick previews, favorites, side-by-side comparison, a coupon system, and persistent cart state with localStorage.",
      ar: "متجر إلكتروني بـ React للساعات الذكية يتميز بتصفح المنتجات، ومعاينة سريعة، والمفضلة، والمقارنة جنبًا إلى جنب، ونظام كوبونات، وحالة سلة تسوق مستمرة مع localStorage.",
    },
    tags: ["React", "Redux Toolkit", "Material UI", "React Router"],
    image: "/projects/smartwatches.webp",
    github: "https://github.com/Maagdy/React-Smartwatch-store-web",
    live: "https://react-smartwatch-store-web.vercel.app/",
  },
  {
    title: { en: "PM Academy", ar: "أكاديمية PM" },
    description: {
      en: "A mobile exam platform for project management certification prep, allowing users to take practice exams, track their progress, and prepare for PM certifications.",
      ar: "منصة اختبارات موبايل للتحضير لشهادات إدارة المشاريع، تتيح للمستخدمين أداء اختبارات تدريبية وتتبع تقدمهم والاستعداد لشهادات إدارة المشاريع.",
    },
    tags: ["React Native", "TypeScript", "Zustand", "React Query", "MMKV"],
    image: "/projects/pm-academy.webp",
    github: null,
    live: null,
  },
  {
    title: { en: "Trio Egy", ar: "تريو إيجي" },
    description: {
      en: "A dynamic bilingual menu web app for Trio Egypt, allowing users to browse food and drink items by category with real-time Firestore syncing, multi-size pricing, and Arabic/English language switching.",
      ar: "تطبيق ويب قائمة ثنائي اللغة لتريو إيجيبت، يتيح للمستخدمين تصفح الأطعمة والمشروبات حسب الفئة مع مزامنة Firestore في الوقت الفعلي، وتسعير متعدد الأحجام، والتبديل بين العربية والإنجليزية.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "/projects/trio-egy.webp",
    github: "https://github.com/Maagdy/trio-egy-menu",
    live: "https://trio-egy-menu.vercel.app/",
  },
];
