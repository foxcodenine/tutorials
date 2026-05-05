import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { UpdateNoteEditor } from "@/components/notes/UpdateNoteEditor";
import { Card } from "@/components/ui/Card";
import { requireSession } from "@/lib/auth";
import { getNoteForUser } from "@/lib/notes";

export default async function NoteDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const session = await requireSession();
  const { id } = await params;
  const note = getNoteForUser(id, session.user.id);

  if (!note) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={note.title || "Untitled note"}
        subtitle="Edit your note and save changes when you are ready."
        actions={
          <Link className="text-sm text-cyan-100 underline underline-offset-4" href="/notes">
            Back to notes
          </Link>
        }
      />

      <Card className="p-6">
        <UpdateNoteEditor
          initialContent={note.content}
          initialTitle={note.title}
          noteId={note.id}
        />
      </Card>
    </div>
  );
}
