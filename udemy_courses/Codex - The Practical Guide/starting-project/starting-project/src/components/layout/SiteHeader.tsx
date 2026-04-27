import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { LogoutButton } from "@/components/layout/LogoutButton";
import type { ServerSession } from "@/lib/auth";

export function SiteHeader({ session }: { session: ServerSession }) {
  const isLoggedIn = Boolean(session);

  return (
    <header className="relative z-10 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link className="text-lg font-semibold tracking-tight text-cyan-100" href="/">
          TinyNotes
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-300">
          {isLoggedIn ? (
            <>
              <Link className="underline underline-offset-4 hover:text-cyan-100" href="/notes">
                Notes
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link className="underline underline-offset-4 hover:text-cyan-100" href="/login">
                Login
              </Link>
              <Link className="underline underline-offset-4 hover:text-cyan-100" href="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </Container>
    </header>
  );
}
