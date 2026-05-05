"use client";

import { createNoteAction } from "@/app/(app)/notes/actions";
import { NoteEditor } from "@/components/notes/NoteEditor";
import type { TiptapContent } from "@/lib/tiptap-content";

export function CreateNoteEditor({ initialContent }: { initialContent: TiptapContent }) {
  return (
    <NoteEditor
      initialContent={initialContent}
      initialStatus="dirty"
      initialTitle=""
      clearLabel="Clear"
      savedLabel="Submit"
      submitLabel="Submit"
      onSave={createNoteAction}
    />
  );
}
