import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "solid" | "ghost";

export function getButtonClassName({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: ButtonVariant;
}) {
  const baseClassName =
    "inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-45";

  const variantClassName =
    variant === "ghost"
      ? "border border-cyan-300/20 bg-slate-950/30 text-cyan-50 shadow-sm shadow-slate-950/20 hover:border-cyan-200/40 hover:bg-cyan-300/10 hover:text-cyan-50"
      : "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/25 hover:bg-cyan-200";

  return [baseClassName, variantClassName, className].filter(Boolean).join(" ");
}

export function Button({
  className,
  type,
  variant,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={getButtonClassName({ className, variant })}
      type={type ?? "button"}
      {...props}
    />
  );
}
