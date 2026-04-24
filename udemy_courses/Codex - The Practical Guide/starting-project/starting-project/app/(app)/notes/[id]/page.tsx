import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default async function NoteDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Note" subtitle="Placeholder detail/editor page (no fetch/autosave yet)." />

      <Card className="space-y-3 p-6">
        <p className="text-sm text-neutral-600">
          Note ID: <span className="font-mono text-neutral-900">{id}</span>
        </p>
        <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-700">
          Note editor + share controls go here.
        </div>
        <Link className="text-sm text-neutral-800 underline underline-offset-4" href="/notes">
          Back to notes
        </Link>
      </Card>
    </div>
  );
}
