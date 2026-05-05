import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { CreateNoteEditor } from "@/components/notes/CreateNoteEditor";
import { Card } from "@/components/ui/Card";
import { getButtonClassName } from "@/components/ui/Button";
import { requireSession } from "@/lib/auth";
import { emptyNoteContent } from "@/lib/notes";

export default async function NewNotePage() {
  await requireSession();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create note"
        subtitle="Draft your content and submit when you are ready."
        actions={
          <Link className={getButtonClassName({ variant: "ghost" })} href="/notes">
            Back to notes
          </Link>
        }
      />

      <Card className="p-6">
        <CreateNoteEditor initialContent={emptyNoteContent} />
      </Card>
    </div>
  );
}
