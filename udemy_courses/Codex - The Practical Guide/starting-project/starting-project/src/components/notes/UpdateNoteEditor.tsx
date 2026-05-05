"use client";

import { updateNoteAction } from "@/app/(app)/notes/actions";
import { NoteEditor } from "@/components/notes/NoteEditor";
import type { TiptapContent } from "@/lib/tiptap-content";

export function UpdateNoteEditor({
  noteId,
  initialTitle,
  initialContent,
}: {
  noteId: string;
  initialTitle: string;
  initialContent: TiptapContent;
}) {
  async function handleSave(input: { title: string; content: TiptapContent }) {
    return updateNoteAction({
      id: noteId,
      title: input.title,
      content: input.content,
    });
  }

  return (
    <NoteEditor
      initialContent={initialContent}
      initialTitle={initialTitle}
      savedLabel="Saved"
      submitLabel="Save"
      onSave={handleSave}
    />
  );
}
