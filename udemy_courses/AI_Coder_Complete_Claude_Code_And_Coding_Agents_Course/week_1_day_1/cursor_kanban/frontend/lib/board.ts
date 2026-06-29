import { arrayMove } from "@dnd-kit/sortable";
import type { Board, Card } from "./types";

export function findColumnByCardId(board: Board, cardId: string) {
  return board.columns.find((column) => column.cardIds.includes(cardId));
}

export function addCard(
  board: Board,
  columnId: string,
  title: string,
  details: string,
  id = crypto.randomUUID()
): Board {
  const card: Card = { id, title, details };

  return {
    cards: { ...board.cards, [id]: card },
    columns: board.columns.map((column) =>
      column.id === columnId
        ? { ...column, cardIds: [...column.cardIds, id] }
        : column
    ),
  };
}

export function deleteCard(board: Board, cardId: string): Board {
  const { [cardId]: removed, ...cards } = board.cards;
  void removed;

  return {
    cards,
    columns: board.columns.map((column) => ({
      ...column,
      cardIds: column.cardIds.filter((id) => id !== cardId),
    })),
  };
}

export function renameColumn(board: Board, columnId: string, title: string): Board {
  return {
    ...board,
    columns: board.columns.map((column) =>
      column.id === columnId ? { ...column, title } : column
    ),
  };
}

export function moveCard(
  board: Board,
  cardId: string,
  toColumnId: string,
  toIndex: number
): Board {
  const fromColumn = findColumnByCardId(board, cardId);
  if (!fromColumn) return board;

  const fromIndex = fromColumn.cardIds.indexOf(cardId);

  if (fromColumn.id === toColumnId) {
    if (fromIndex === toIndex) return board;

    return {
      ...board,
      columns: board.columns.map((column) =>
        column.id === toColumnId
          ? { ...column, cardIds: arrayMove(column.cardIds, fromIndex, toIndex) }
          : column
      ),
    };
  }

  const columnsWithoutCard = board.columns.map((column) =>
    column.id === fromColumn.id
      ? { ...column, cardIds: column.cardIds.filter((id) => id !== cardId) }
      : column
  );

  const targetColumn = columnsWithoutCard.find((column) => column.id === toColumnId);
  if (!targetColumn) return board;

  const insertIndex = Math.max(0, Math.min(toIndex, targetColumn.cardIds.length));

  return {
    ...board,
    columns: columnsWithoutCard.map((column) => {
      if (column.id !== toColumnId) return column;

      const cardIds = [...column.cardIds];
      cardIds.splice(insertIndex, 0, cardId);
      return { ...column, cardIds };
    }),
  };
}
