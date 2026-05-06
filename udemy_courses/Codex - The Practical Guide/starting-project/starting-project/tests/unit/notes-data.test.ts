import { afterEach, describe, expect, test, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  query: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  getDatabase: () => ({
    query: mocks.query,
  }),
}));

import {
  createNoteForUser,
  emptyNoteContent,
  getNoteForUser,
  listNotesForUser,
  updateNoteForUser,
} from "@/lib/notes";

const storedContent = {
  type: "doc",
  content: [{ type: "paragraph", content: [{ type: "text", text: "Body" }] }],
};

afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("notes data helpers", () => {
  test("listNotesForUser maps rows and SQLite booleans", () => {
    mocks.query.mockReturnValue({
      all: vi.fn(() => [
        {
          created_at: "2026-01-01T10:00:00.000Z",
          id: "note-1",
          share_enabled: 1,
          title: "Shared note",
          updated_at: "2026-01-02T10:00:00.000Z",
        },
        {
          created_at: "2026-01-01T09:00:00.000Z",
          id: "note-2",
          share_enabled: 0,
          title: "",
          updated_at: "2026-01-01T09:00:00.000Z",
        },
      ]),
    });

    expect(listNotesForUser("user-1")).toEqual([
      {
        createdAt: "2026-01-01T10:00:00.000Z",
        id: "note-1",
        shareEnabled: true,
        title: "Shared note",
        updatedAt: "2026-01-02T10:00:00.000Z",
      },
      {
        createdAt: "2026-01-01T09:00:00.000Z",
        id: "note-2",
        shareEnabled: false,
        title: "",
        updatedAt: "2026-01-01T09:00:00.000Z",
      },
    ]);
  });

  test("getNoteForUser returns parsed TipTap content", () => {
    mocks.query.mockReturnValue({
      get: vi.fn(() => ({
        content_json: JSON.stringify(storedContent),
        created_at: "2026-01-01T10:00:00.000Z",
        id: "note-1",
        share_enabled: 0,
        title: "Stored note",
        updated_at: "2026-01-02T10:00:00.000Z",
      })),
    });

    expect(getNoteForUser("note-1", "user-1")).toEqual({
      content: storedContent,
      createdAt: "2026-01-01T10:00:00.000Z",
      id: "note-1",
      shareEnabled: false,
      title: "Stored note",
      updatedAt: "2026-01-02T10:00:00.000Z",
    });
  });

  test("getNoteForUser falls back to empty content for corrupt JSON", () => {
    mocks.query.mockReturnValue({
      get: vi.fn(() => ({
        content_json: "{not-json",
        created_at: "2026-01-01T10:00:00.000Z",
        id: "note-1",
        share_enabled: 0,
        title: "Stored note",
        updated_at: "2026-01-02T10:00:00.000Z",
      })),
    });

    expect(getNoteForUser("note-1", "user-1")?.content).toEqual(emptyNoteContent);
  });

  test("getNoteForUser returns null when the row is missing", () => {
    mocks.query.mockReturnValue({
      get: vi.fn(() => null),
    });

    expect(getNoteForUser("missing-note", "user-1")).toBeNull();
  });

  test("createNoteForUser inserts serialized content and returns the id", () => {
    const run = vi.fn();
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-02T10:30:00.000Z"));
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "note-1" as `${string}-${string}-${string}-${string}-${string}`,
    );
    mocks.query.mockReturnValue({ run });

    expect(
      createNoteForUser({
        content: storedContent,
        title: "New note",
        userId: "user-1",
      }),
    ).toBe("note-1");

    expect(run).toHaveBeenCalledWith(
      "note-1",
      "user-1",
      "New note",
      JSON.stringify(storedContent),
      "2026-01-02T10:30:00.000Z",
      "2026-01-02T10:30:00.000Z",
    );
  });

  test("updateNoteForUser returns true when SQLite updates a row", () => {
    const run = vi.fn(() => ({ changes: 1 }));
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-02T10:30:00.000Z"));
    mocks.query.mockReturnValue({ run });

    expect(
      updateNoteForUser({
        content: storedContent,
        noteId: "note-1",
        title: "Updated note",
        userId: "user-1",
      }),
    ).toBe(true);

    expect(run).toHaveBeenCalledWith(
      "Updated note",
      JSON.stringify(storedContent),
      "2026-01-02T10:30:00.000Z",
      "note-1",
      "user-1",
    );
  });

  test("updateNoteForUser returns false when SQLite updates no rows", () => {
    mocks.query.mockReturnValue({
      run: vi.fn(() => ({ changes: 0 })),
    });

    expect(
      updateNoteForUser({
        content: storedContent,
        noteId: "missing-note",
        title: "Updated note",
        userId: "user-1",
      }),
    ).toBe(false);
  });
});
