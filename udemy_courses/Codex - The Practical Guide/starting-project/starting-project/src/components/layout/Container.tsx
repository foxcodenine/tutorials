import type { ComponentPropsWithoutRef } from "react";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={["mx-auto w-full max-w-5xl px-4", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

