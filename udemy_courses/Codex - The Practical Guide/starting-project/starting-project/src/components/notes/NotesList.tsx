import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { NoteListItem } from "@/lib/notes";

function formatUpdatedAt(value: string): string {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getNoteTitle(note: NoteListItem): string {
  return note.title || "Untitled note";
}

export function NotesList({ notes }: { notes: NoteListItem[] }) {
  if (notes.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h2 className="text-lg font-semibold text-slate-50">No notes yet</h2>
        <p className="mt-2 text-sm text-slate-300">
          Create your first note and it will appear here.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid gap-3">
      {notes.map((note) => (
        <Link
          className="group rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
          href={`/notes/${note.id}`}
          key={note.id}
        >
          <Card className="p-5 transition group-hover:border-cyan-300/30 group-hover:bg-slate-900">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-medium text-slate-50">{getNoteTitle(note)}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Updated {formatUpdatedAt(note.updatedAt)}
                </p>
              </div>
              {note.shareEnabled ? (
                <span className="w-fit rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-cyan-100">
                  Shared
                </span>
              ) : null}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
