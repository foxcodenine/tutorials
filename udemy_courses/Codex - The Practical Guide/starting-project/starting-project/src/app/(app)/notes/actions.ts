"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createNoteForUser, updateNoteForUser } from "@/lib/notes";
import { requireSession } from "@/lib/auth";
import type { TiptapContent } from "@/lib/tiptap-content";

export type SaveNoteResult = {
  success: boolean;
  message: string;
};

function normalizeTitle(title: string): string {
  return title.trim().slice(0, 160);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isTiptapDocument(value: unknown): value is TiptapContent {
  return isRecord(value) && value.type === "doc";
}

function validateContent(content: unknown): TiptapContent | null {
  if (!isTiptapDocument(content)) {
    return null;
  }

  return content;
}

export async function createNoteAction(input: {
  title: string;
  content: unknown;
}): Promise<SaveNoteResult> {
  const session = await requireSession();
  const content = validateContent(input.content);

  if (!content) {
    return {
      success: false,
      message: "Could not save this note content.",
    };
  }

  try {
    const noteId = createNoteForUser({
      userId: session.user.id,
      title: normalizeTitle(input.title),
      content,
    });

    revalidatePath("/notes");
    redirect(`/notes/${noteId}`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: "Could not create this note.",
    };
  }
}

export async function updateNoteAction(input: {
  id: string;
  title: string;
  content: unknown;
}): Promise<SaveNoteResult> {
  const session = await requireSession();
  const content = validateContent(input.content);

  if (!content) {
    return {
      success: false,
      message: "Could not save this note content.",
    };
  }

  try {
    const wasUpdated = updateNoteForUser({
      noteId: input.id,
      userId: session.user.id,
      title: normalizeTitle(input.title),
      content,
    });

    if (!wasUpdated) {
      return {
        success: false,
        message: "This note could not be found.",
      };
    }

    revalidatePath("/notes");
    revalidatePath(`/notes/${input.id}`);

    return {
      success: true,
      message: "Saved",
    };
  } catch {
    return {
      success: false,
      message: "Could not save this note.",
    };
  }
}

function isRedirectError(error: unknown): boolean {
  return (
    isRecord(error) && typeof error.digest === "string" && error.digest.startsWith("NEXT_REDIRECT")
  );
}
