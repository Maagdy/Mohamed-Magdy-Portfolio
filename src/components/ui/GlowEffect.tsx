import type { GlowEffectProps } from "../../types";

export default function GlowEffect({ className = "" }: GlowEffectProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 dark:opacity-15 bg-primary-500 pointer-events-none ${className}`}
    />
  );
}
