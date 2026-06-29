import type { Card, Column } from "./types";

// Wire format returned by the backend
type ApiCard = { id: string; title: string; details: string };
type ApiColumn = { id: string; title: string; cardIds: string[] };
type ApiBoard = { columns: ApiColumn[]; cards: Record<string, ApiCard> };

export function apiToColumns(data: ApiBoard): Column[] {
  return data.columns.map((col) => ({
    id: col.id,
    name: col.title,
    cards: col.cardIds.map((id) => data.cards[id]).filter(Boolean) as Card[],
  }));
}

export function columnsToApi(columns: Column[]): ApiBoard {
  const cards: Record<string, ApiCard> = {};
  const apiColumns: ApiColumn[] = columns.map((col) => {
    const cardIds = col.cards.map((card) => {
      cards[card.id] = card;
      return card.id;
    });
    return { id: col.id, title: col.name, cardIds };
  });
  return { columns: apiColumns, cards };
}

export async function getBoard(token: string): Promise<Column[]> {
  const res = await fetch("/api/board", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to load board: ${res.status}`);
  return apiToColumns(await res.json());
}

export async function putBoard(token: string, columns: Column[]): Promise<Column[]> {
  const res = await fetch("/api/board", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(columnsToApi(columns)),
  });
  if (!res.ok) throw new Error(`Failed to save board: ${res.status}`);
  return apiToColumns(await res.json());
}

export async function chatAI(
  token: string,
  message: string,
  history: { role: string; content: string }[]
): Promise<{ reply: string; board_updated: boolean }> {
  const res = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) throw new Error(`AI request failed: ${res.status}`);
  return res.json();
}
