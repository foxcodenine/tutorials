import type { ComponentPropsWithoutRef } from "react";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={[
        "h-11 w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 text-sm text-slate-100",
        "placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
