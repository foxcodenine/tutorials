import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  createNoteForUser: vi.fn(),
  redirect: vi.fn((url: string) => {
    throw { digest: `NEXT_REDIRECT;replace;${url}` };
  }),
  requireSession: vi.fn(),
  revalidatePath: vi.fn(),
  updateNoteForUser: vi.fn(),
}));

vi.mock("next/cache", () => ({
  revalidatePath: mocks.revalidatePath,
}));

vi.mock("next/navigation", () => ({
  redirect: mocks.redirect,
}));

vi.mock("@/lib/auth", () => ({
  requireSession: mocks.requireSession,
}));

vi.mock("@/lib/notes", () => ({
  createNoteForUser: mocks.createNoteForUser,
  updateNoteForUser: mocks.updateNoteForUser,
}));

import { createNoteAction, updateNoteAction } from "@/app/(app)/notes/actions";

const content = {
  type: "doc",
  content: [{ type: "paragraph" }],
};

beforeEach(() => {
  mocks.requireSession.mockResolvedValue({ user: { id: "user-1" } });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("notes actions", () => {
  test("createNoteAction rejects invalid TipTap content", async () => {
    const result = await createNoteAction({ title: "Draft", content: { type: "paragraph" } });

    expect(result).toEqual({
      success: false,
      message: "Could not save this note content.",
    });
    expect(mocks.createNoteForUser).not.toHaveBeenCalled();
  });

  test("createNoteAction creates a normalized note and redirects to it", async () => {
    mocks.createNoteForUser.mockReturnValue("note-1");

    await expect(
      createNoteAction({
        title: `  ${"A".repeat(200)}  `,
        content,
      }),
    ).rejects.toMatchObject({ digest: "NEXT_REDIRECT;replace;/notes/note-1" });

    expect(mocks.createNoteForUser).toHaveBeenCalledWith({
      userId: "user-1",
      title: "A".repeat(160),
      content,
    });
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/notes");
    expect(mocks.redirect).toHaveBeenCalledWith("/notes/note-1");
  });

  test("createNoteAction returns a safe error when persistence fails", async () => {
    mocks.createNoteForUser.mockImplementation(() => {
      throw new Error("SQL failed");
    });

    const result = await createNoteAction({ title: "Draft", content });

    expect(result).toEqual({
      success: false,
      message: "Could not create this note.",
    });
  });

  test("updateNoteAction rejects invalid TipTap content", async () => {
    const result = await updateNoteAction({
      id: "note-1",
      title: "Draft",
      content: null,
    });

    expect(result).toEqual({
      success: false,
      message: "Could not save this note content.",
    });
    expect(mocks.updateNoteForUser).not.toHaveBeenCalled();
  });

  test("updateNoteAction saves changes and revalidates affected routes", async () => {
    mocks.updateNoteForUser.mockReturnValue(true);

    const result = await updateNoteAction({
      id: "note-1",
      title: "  Updated note  ",
      content,
    });

    expect(result).toEqual({ success: true, message: "Saved" });
    expect(mocks.updateNoteForUser).toHaveBeenCalledWith({
      noteId: "note-1",
      userId: "user-1",
      title: "Updated note",
      content,
    });
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/notes");
    expect(mocks.revalidatePath).toHaveBeenCalledWith("/notes/note-1");
  });

  test("updateNoteAction reports missing notes without leaking details", async () => {
    mocks.updateNoteForUser.mockReturnValue(false);

    const result = await updateNoteAction({
      id: "missing-note",
      title: "Draft",
      content,
    });

    expect(result).toEqual({
      success: false,
      message: "This note could not be found.",
    });
  });

  test("updateNoteAction returns a safe error when persistence throws", async () => {
    mocks.updateNoteForUser.mockImplementation(() => {
      throw new Error("SQL failed");
    });

    const result = await updateNoteAction({ id: "note-1", title: "Draft", content });

    expect(result).toEqual({
      success: false,
      message: "Could not save this note.",
    });
  });
});
