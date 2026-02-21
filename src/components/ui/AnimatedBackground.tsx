export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-[blob1_20s_linear_infinite]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 dark:bg-primary-600/5 rounded-full blur-3xl animate-[blob2_25s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 dark:bg-primary-400/3 rounded-full blur-3xl animate-[blob3_18s_linear_infinite]" />
    </div>
  );
}
