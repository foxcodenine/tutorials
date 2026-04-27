import Link from "next/link";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

export function AuthFormCard({
  title,
  subtitle,
  switchLabel,
  switchHref,
  switchPrompt,
  children,
}: {
  title: string;
  subtitle: string;
  switchLabel: string;
  switchHref: string;
  switchPrompt: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-[calc(100dvh-9rem)] place-items-center px-4 py-6">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="border-b border-white/5 px-6 py-6 text-center sm:px-7">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50">{title}</h1>
          <p className="mt-3 text-base text-slate-300">{subtitle}</p>
        </div>

        <div className="space-y-6 px-6 py-6 sm:px-7">
          {children}

          <div className="border-t border-white/5 pt-5 text-center">
            <p className="text-sm text-slate-300">
              {switchPrompt}{" "}
              <Link
                className="font-medium text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                href={switchHref}
              >
                {switchLabel}
              </Link>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Email and password only. No password reset flow.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
