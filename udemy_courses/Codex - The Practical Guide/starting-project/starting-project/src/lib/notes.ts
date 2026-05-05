import { getDatabase } from "@/lib/db";
import type { TiptapContent } from "@/lib/tiptap-content";

export type NoteListItem = {
  id: string;
  title: string;
  shareEnabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NoteDetail = NoteListItem & {
  content: TiptapContent;
};

type NoteListRow = {
  id: string;
  title: string;
  share_enabled: 0 | 1;
  created_at: string;
  updated_at: string;
};

type NoteDetailRow = NoteListRow & {
  content_json: string;
};

export const emptyNoteContent: TiptapContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
    },
  ],
};

function parseNoteContent(contentJson: string): TiptapContent {
  try {
    const parsed = JSON.parse(contentJson) as TiptapContent;

    if (parsed && typeof parsed === "object" && parsed.type === "doc") {
      return parsed;
    }
  } catch {
    // Keep corrupt content from breaking the whole authenticated area.
  }

  return emptyNoteContent;
}

function mapListRow(row: NoteListRow): NoteListItem {
  return {
    id: row.id,
    title: row.title,
    shareEnabled: row.share_enabled === 1,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapDetailRow(row: NoteDetailRow): NoteDetail {
  return {
    ...mapListRow(row),
    content: parseNoteContent(row.content_json),
  };
}

export function listNotesForUser(userId: string): NoteListItem[] {
  const rows = getDatabase()
    .query<NoteListRow, string>(`
      SELECT id, title, share_enabled, created_at, updated_at
      FROM note
      WHERE user_id = ?
      ORDER BY updated_at DESC
    `)
    .all(userId);

  return rows.map(mapListRow);
}

export function getNoteForUser(noteId: string, userId: string): NoteDetail | null {
  const row = getDatabase()
    .query<NoteDetailRow, string>(`
      SELECT id, title, share_enabled, created_at, updated_at, content_json
      FROM note
      WHERE id = ? AND user_id = ?
    `)
    .get(noteId, userId);

  return row ? mapDetailRow(row) : null;
}

export function createNoteForUser({
  userId,
  title,
  content,
}: {
  userId: string;
  title: string;
  content: TiptapContent;
}): string {
  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();

  getDatabase()
    .query(`
      INSERT INTO note (id, user_id, title, content_json, share_enabled, created_at, updated_at)
      VALUES (?, ?, ?, ?, 0, ?, ?)
    `)
    .run(id, userId, title, JSON.stringify(content), timestamp, timestamp);

  return id;
}

export function updateNoteForUser({
  noteId,
  userId,
  title,
  content,
}: {
  noteId: string;
  userId: string;
  title: string;
  content: TiptapContent;
}): boolean {
  const result = getDatabase()
    .query(`
      UPDATE note
      SET title = ?, content_json = ?, updated_at = ?
      WHERE id = ? AND user_id = ?
    `)
    .run(title, JSON.stringify(content), new Date().toISOString(), noteId, userId);

  return result.changes > 0;
}
