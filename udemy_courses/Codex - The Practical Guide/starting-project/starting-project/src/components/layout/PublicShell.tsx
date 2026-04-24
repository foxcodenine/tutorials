import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200/70 bg-white/70 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <Link className="font-semibold tracking-tight" href="/">
            TinyNotes
          </Link>
          <nav className="flex items-center gap-4 text-sm text-neutral-700">
            <Link className="underline underline-offset-4" href="/login">
              Login
            </Link>
            <Link className="underline underline-offset-4" href="/register">
              Register
            </Link>
          </nav>
        </Container>
      </header>

      <main className="py-10">
        <Container>{children}</Container>
      </main>
    </div>
  );
}

