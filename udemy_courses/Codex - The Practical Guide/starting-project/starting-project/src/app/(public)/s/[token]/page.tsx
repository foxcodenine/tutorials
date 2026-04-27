import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";

export default async function SharedNotePage({
  params,
}: {
  params: { token: string } | Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Shared note" subtitle="Placeholder page (no fetch/sanitization yet)." />

      <Card className="space-y-3 p-6">
        <p className="text-sm text-neutral-600">
          Token: <span className="font-mono text-neutral-900">{token}</span>
        </p>
        <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-700">
          Shared note content goes here.
        </div>
      </Card>
    </div>
  );
}
