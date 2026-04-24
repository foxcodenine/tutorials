import type { ComponentPropsWithoutRef } from "react";

export function Button({
  className,
  type,
  ...props
}: ComponentPropsWithoutRef<"button"> & { type?: "button" | "submit" | "reset" }) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white",
        "hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type={type ?? "button"}
      {...props}
    />
  );
}

