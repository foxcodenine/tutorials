"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useTransition } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type { SaveNoteResult } from "@/app/(app)/notes/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { TiptapContent } from "@/lib/tiptap-content";

type SaveStatus = "saved" | "dirty" | "saving";

type NoteEditorProps = {
  initialTitle: string;
  initialContent: TiptapContent;
  initialStatus?: SaveStatus;
  submitLabel: string;
  savedLabel: string;
  clearLabel?: string;
  onSave: (input: { title: string; content: TiptapContent }) => Promise<SaveNoteResult>;
};

type ToolbarButton = {
  label: string;
  isActive: boolean;
  isDisabled: boolean;
  onSelect: () => void;
};

function getStatusText(status: SaveStatus): string {
  if (status === "saving") {
    return "Saving";
  }

  if (status === "dirty") {
    return "Unsaved changes";
  }

  return "Saved";
}

function getSaveButtonLabel({
  status,
  submitLabel,
  savedLabel,
}: {
  status: SaveStatus;
  submitLabel: string;
  savedLabel: string;
}): string {
  if (status === "saving") {
    return "Saving...";
  }

  if (status === "saved") {
    return savedLabel;
  }

  return submitLabel;
}

export function NoteEditor({
  initialTitle,
  initialContent,
  initialStatus = "saved",
  submitLabel,
  savedLabel,
  clearLabel,
  onSave,
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [status, setStatus] = useState<SaveStatus>(initialStatus);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class:
          "min-h-[24rem] px-4 py-4 text-base leading-7 text-slate-100 outline-none prose-headings:text-slate-50",
      },
    },
    onUpdate() {
      setStatus("dirty");
      setError(null);
    },
  });

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    setStatus("dirty");
    setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!editor || isPending || status !== "dirty") {
      return;
    }

    setStatus("saving");
    setError(null);

    startTransition(async () => {
      const result = await onSave({
        title,
        content: editor.getJSON(),
      });

      if (result.success) {
        setStatus("saved");
        return;
      }

      setStatus("dirty");
      setError(result.message);
    });
  }

  function handleClear() {
    if (!editor || isPending) {
      return;
    }

    setTitle("");
    editor.commands.setContent(initialContent);
    setStatus("dirty");
    setError(null);
  }

  if (!editor) {
    return (
      <div className="rounded-xl border border-cyan-300/10 bg-slate-950/70 p-6 text-sm text-slate-300">
        Loading editor...
      </div>
    );
  }

  const toolbarButtons: ToolbarButton[] = [
    {
      label: "Bold",
      isActive: editor.isActive("bold"),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      isActive: editor.isActive("italic"),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "Heading",
      isActive: editor.isActive("heading", { level: 2 }),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Bullet list",
      isActive: editor.isActive("bulletList"),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Numbered list",
      isActive: editor.isActive("orderedList"),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Quote",
      isActive: editor.isActive("blockquote"),
      isDisabled: false,
      onSelect: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      label: "Undo",
      isActive: false,
      isDisabled: !editor.can().undo(),
      onSelect: () => editor.chain().focus().undo().run(),
    },
    {
      label: "Redo",
      isActive: false,
      isDisabled: !editor.can().redo(),
      onSelect: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm text-slate-300">Title</span>
          <Input
            className="h-12 border-cyan-300/20 bg-slate-950/40"
            maxLength={160}
            placeholder="Untitled note"
            value={title}
            onChange={handleTitleChange}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p aria-live="polite" className="text-sm font-medium text-slate-300">
            {getStatusText(status)}
          </p>
          <div className="flex items-center gap-2">
            {clearLabel ? (
              <Button disabled={isPending} type="button" variant="ghost" onClick={handleClear}>
                {clearLabel}
              </Button>
            ) : null}
            <Button className="min-w-28" disabled={isPending || status !== "dirty"} type="submit">
              {getSaveButtonLabel({ status, submitLabel, savedLabel })}
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-cyan-300/15 bg-slate-950/70 shadow-inner shadow-slate-950/40">
        <div className="flex flex-wrap gap-2 border-b border-cyan-300/10 bg-slate-900/80 px-3 py-3">
          {toolbarButtons.map((button) => (
            <button
              aria-pressed={button.isActive}
              className={[
                "rounded-md border px-3 py-1.5 text-sm transition",
                button.isActive
                  ? "border-cyan-300/50 bg-cyan-300/20 text-cyan-50"
                  : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-300/30 hover:text-cyan-50",
                "disabled:cursor-not-allowed disabled:opacity-40",
              ].join(" ")}
              disabled={button.isDisabled}
              key={button.label}
              type="button"
              onClick={button.onSelect}
            >
              {button.label}
            </button>
          ))}
        </div>

        <EditorContent className="note-editor-content" editor={editor} />
      </div>

      {error ? (
        <p aria-live="polite" className="text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </form>
  );
}
