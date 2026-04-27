import type { ComponentPropsWithoutRef } from "react";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={[
        "rounded-2xl border border-cyan-400/10 bg-slate-900/80 shadow-xl shadow-slate-950/30 backdrop-blur",
        "text-slate-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
