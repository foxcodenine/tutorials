import type { ComponentPropsWithoutRef } from "react";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={[
        "h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900",
        "placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

