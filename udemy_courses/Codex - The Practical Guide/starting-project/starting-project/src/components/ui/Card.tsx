import type { ComponentPropsWithoutRef } from "react";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={[
        "rounded-lg border border-neutral-200 bg-white shadow-sm",
        "text-neutral-900",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

