import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { NoteEditor } from "@/components/notes/NoteEditor";
import type { TiptapContent } from "@/lib/tiptap-content";

const tiptapMock = vi.hoisted(() => ({
  content: {
    type: "doc",
    content: [{ type: "paragraph" }],
  } as TiptapContent,
  options: null as { onUpdate?: () => void } | null,
}));

const editorMock = vi.hoisted(() => ({
  can: vi.fn(() => ({
    redo: () => false,
    undo: () => false,
  })),
  chain: vi.fn(() => ({
    focus() {
      return this;
    },
    redo() {
      return this;
    },
    run() {
      return true;
    },
    toggleBlockquote() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    toggleBold() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    toggleBulletList() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    toggleHeading() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    toggleItalic() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    toggleOrderedList() {
      tiptapMock.options?.onUpdate?.();
      return this;
    },
    undo() {
      return this;
    },
  })),
  commands: {
    setContent: vi.fn((content: TiptapContent) => {
      tiptapMock.content = content;
      tiptapMock.options?.onUpdate?.();
      return true;
    }),
  },
  getJSON: vi.fn(() => tiptapMock.content),
  isActive: vi.fn(() => false),
}));

vi.mock("@tiptap/react", () => ({
  EditorContent: () => (
    <div
      aria-label="Note body"
      contentEditable
      role="textbox"
      suppressContentEditableWarning
      onInput={(event) => {
        const text = event.currentTarget.textContent ?? "";

        tiptapMock.content = {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: text ? [{ type: "text", text }] : undefined,
            },
          ],
        } as TiptapContent;
        tiptapMock.options?.onUpdate?.();
      }}
    />
  ),
  useEditor: vi.fn((options: { onUpdate?: () => void }) => {
    tiptapMock.options = options;
    return editorMock;
  }),
}));

vi.mock("@tiptap/starter-kit", () => ({
  default: {},
}));

const initialContent: TiptapContent = {
  type: "doc",
  content: [{ type: "paragraph" }],
};

afterEach(() => {
  tiptapMock.content = initialContent;
  tiptapMock.options = null;
  vi.clearAllMocks();
});

describe("NoteEditor", () => {
  test("starts saved and disables submit until the user changes something", () => {
    render(
      <NoteEditor
        initialContent={initialContent}
        initialTitle="Existing note"
        savedLabel="Saved"
        submitLabel="Save"
        onSave={vi.fn()}
      />,
    );

    expect(screen.getAllByText("Saved")).toHaveLength(2);
    expect((screen.getByRole("button", { name: "Saved" }) as HTMLButtonElement).disabled).toBe(
      true,
    );
  });

  test("marks the editor dirty when the title changes", () => {
    render(
      <NoteEditor
        initialContent={initialContent}
        initialTitle="Existing note"
        savedLabel="Saved"
        submitLabel="Save"
        onSave={vi.fn()}
      />,
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Updated note" },
    });

    expect(screen.getByText("Unsaved changes")).toBeTruthy();
    expect((screen.getByRole("button", { name: "Save" }) as HTMLButtonElement).disabled).toBe(
      false,
    );
  });

  test("saves title and TipTap JSON, then returns to saved state", async () => {
    const onSave = vi.fn().mockResolvedValue({ success: true, message: "Saved" });
    render(
      <NoteEditor
        initialContent={initialContent}
        initialTitle="Existing note"
        savedLabel="Saved"
        submitLabel="Save"
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Updated note" },
    });
    const body = screen.getByRole("textbox", { name: "Note body" });
    body.textContent = "Updated body";
    fireEvent.input(body);
    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith({
        title: "Updated note",
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Updated body" }],
            },
          ],
        },
      });
    });
    await waitFor(() => {
      expect(screen.getAllByText("Saved")).toHaveLength(2);
    });
  });

  test("shows save errors and keeps changes dirty", async () => {
    const onSave = vi
      .fn()
      .mockResolvedValue({ success: false, message: "Could not save this note." });
    render(
      <NoteEditor
        initialContent={initialContent}
        initialTitle="Existing note"
        savedLabel="Saved"
        submitLabel="Save"
        onSave={onSave}
      />,
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Updated note" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(await screen.findByText("Could not save this note.")).toBeTruthy();
    expect(screen.getByText("Unsaved changes")).toBeTruthy();
    await waitFor(() => {
      expect((screen.getByRole("button", { name: "Save" }) as HTMLButtonElement).disabled).toBe(
        false,
      );
    });
  });

  test("clears the title and resets the editor content", () => {
    render(
      <NoteEditor
        clearLabel="Clear"
        initialContent={initialContent}
        initialStatus="dirty"
        initialTitle="Draft note"
        savedLabel="Submit"
        submitLabel="Submit"
        onSave={vi.fn()}
      />,
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Changed draft" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect((screen.getByLabelText("Title") as HTMLInputElement).value).toBe("");
    expect(editorMock.commands.setContent).toHaveBeenCalledWith(initialContent);
    expect(screen.getByText("Unsaved changes")).toBeTruthy();
  });
});
