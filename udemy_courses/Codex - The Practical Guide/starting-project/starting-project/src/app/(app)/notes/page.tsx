import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { NotesList } from "@/components/notes/NotesList";
import { Button } from "@/components/ui/Button";
import { requireSession } from "@/lib/auth";
import { listNotesForUser } from "@/lib/notes";

export default async function NotesListPage() {
  const session = await requireSession();
  const notes = listNotesForUser(session.user.id);

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Welcome back, ${session.user.name}`}
        subtitle="Your private notes, ordered by the latest update."
        actions={
          <Link href="/notes/new">
            <Button>New note</Button>
          </Link>
        }
      />

      <NotesList notes={notes} />
    </div>
  );
}
