import type { ButtonProps } from "../../types";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25",
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-500 dark:hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
