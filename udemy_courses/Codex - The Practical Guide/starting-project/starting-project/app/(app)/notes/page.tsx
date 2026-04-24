import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default function NotesListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Your notes"
        subtitle="Placeholder list (no DB reads yet)."
        actions={
          <Link className="text-sm text-neutral-800 underline underline-offset-4" href="/notes/new">
            New note
          </Link>
        }
      />

      <div className="grid gap-3">
        <Card className="p-5">
          <Link className="font-medium underline underline-offset-4" href="/notes/1">
            First placeholder note
          </Link>
          <p className="mt-1 text-sm text-neutral-600">Updated: (dummy timestamp)</p>
        </Card>
        <Card className="p-5">
          <Link className="font-medium underline underline-offset-4" href="/notes/2">
            Second placeholder note
          </Link>
          <p className="mt-1 text-sm text-neutral-600">Updated: (dummy timestamp)</p>
        </Card>
      </div>
    </div>
  );
}

