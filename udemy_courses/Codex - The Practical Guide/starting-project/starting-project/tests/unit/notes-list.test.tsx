import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { NotesList } from "@/components/notes/NotesList";
import type { NoteListItem } from "@/lib/notes";

function note(overrides: Partial<NoteListItem>): NoteListItem {
  return {
    createdAt: "2026-01-02T10:30:00.000Z",
    id: "note-1",
    shareEnabled: false,
    title: "Project notes",
    updatedAt: "2026-01-02T10:30:00.000Z",
    ...overrides,
  };
}

describe("NotesList", () => {
  test("renders an empty state when there are no notes", () => {
    render(<NotesList notes={[]} />);

    expect(screen.getByRole("heading", { name: "No notes yet" })).toBeTruthy();
    expect(screen.getByText("Create your first note and it will appear here.")).toBeTruthy();
  });

  test("renders notes as links to their detail pages", () => {
    render(<NotesList notes={[note({ id: "note-123", title: "Meeting plan" })]} />);

    const link = screen.getByRole("link", { name: /Meeting plan/i }) as HTMLAnchorElement;

    expect(link.getAttribute("href")).toBe("/notes/note-123");
    expect(screen.getByText(/Updated/)).toBeTruthy();
  });

  test("uses a fallback title for untitled notes", () => {
    render(<NotesList notes={[note({ title: "" })]} />);

    expect(screen.getByRole("heading", { name: "Untitled note" })).toBeTruthy();
  });

  test("marks shared notes", () => {
    render(<NotesList notes={[note({ shareEnabled: true })]} />);

    expect(screen.getByText("Shared")).toBeTruthy();
  });
});
