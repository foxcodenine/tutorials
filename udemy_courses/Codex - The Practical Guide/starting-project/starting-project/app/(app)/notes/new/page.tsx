import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function NewNotePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New note" subtitle="Placeholder editor page (no TipTap yet)." />

      <Card className="space-y-3 p-6">
        <label className="grid gap-1">
          <span className="text-sm text-neutral-700">Title</span>
          <Input placeholder="Untitled note" />
        </label>
        <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-700">
          Editor goes here.
        </div>
      </Card>
    </div>
  );
}

