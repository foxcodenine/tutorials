import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <main className="min-h-screen py-10">
      <Container>
        <Card className="space-y-3 p-6">
          <h1 className="text-2xl font-semibold tracking-tight">404 — Not found</h1>
          <p className="text-sm text-neutral-600">
            This page doesn&apos;t exist (yet). The app is currently scaffold-only.
          </p>
          <Link className="text-sm text-neutral-800 underline underline-offset-4" href="/">
            Go back home
          </Link>
        </Card>
      </Container>
    </main>
  );
}

