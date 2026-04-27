import type { ComponentPropsWithoutRef } from "react";

export function Button({
  className,
  type,
  ...props
}: ComponentPropsWithoutRef<"button"> & { type?: "button" | "submit" | "reset" }) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-md bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950",
        "shadow-sm shadow-cyan-950/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type={type ?? "button"}
      {...props}
    />
  );
}
