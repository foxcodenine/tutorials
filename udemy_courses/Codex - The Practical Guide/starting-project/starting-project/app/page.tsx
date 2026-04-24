import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen py-10">
      <Container>
        <PageHeader
          title="TinyNotes"
          subtitle="Base routes + shared components scaffold (no real app logic yet)."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="space-y-2 p-5">
            <h2 className="text-lg font-medium">Public</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="text-neutral-700 underline underline-offset-4" href="/login">
                /login
              </Link>
              <Link className="text-neutral-700 underline underline-offset-4" href="/register">
                /register
              </Link>
              <Link className="text-neutral-700 underline underline-offset-4" href="/s/example-token">
                /s/[token]
              </Link>
            </div>
          </Card>

          <Card className="space-y-2 p-5">
            <h2 className="text-lg font-medium">App</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="text-neutral-700 underline underline-offset-4" href="/notes">
                /notes
              </Link>
              <Link className="text-neutral-700 underline underline-offset-4" href="/notes/new">
                /notes/new
              </Link>
              <Link className="text-neutral-700 underline underline-offset-4" href="/notes/123">
                /notes/[id]
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
