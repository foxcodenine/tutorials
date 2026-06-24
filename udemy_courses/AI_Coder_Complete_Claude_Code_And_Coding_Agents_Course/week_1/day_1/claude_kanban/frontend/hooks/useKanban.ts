'use client';
import { useState, useCallback } from 'react';
import { Column, Card } from '@/lib/types';
import { initialColumns } from '@/lib/initialData';

let nextId = 100;

function arrayMove<T>(arr: T[], from: number, to: number): T[] {
  const result = [...arr];
  result.splice(to, 0, result.splice(from, 1)[0]);
  return result;
}

export function useKanban() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  const renameColumn = useCallback((columnId: string, name: string) => {
    setColumns(cols =>
      cols.map(c => (c.id === columnId ? { ...c, name } : c))
    );
  }, []);

  const addCard = useCallback((columnId: string, card: Omit<Card, 'id'>) => {
    const newCard: Card = { ...card, id: `card-${++nextId}` };
    setColumns(cols =>
      cols.map(c =>
        c.id === columnId ? { ...c, cards: [...c.cards, newCard] } : c
      )
    );
  }, []);

  const deleteCard = useCallback((columnId: string, cardId: string) => {
    setColumns(cols =>
      cols.map(c =>
        c.id === columnId
          ? { ...c, cards: c.cards.filter(card => card.id !== cardId) }
          : c
      )
    );
  }, []);

  const moveCard = useCallback(
    (cardId: string, fromColumnId: string, toColumnId: string, toIndex: number) => {
      setColumns(cols => {
        const fromCol = cols.find(c => c.id === fromColumnId);
        const card = fromCol?.cards.find(c => c.id === cardId);
        if (!card) return cols;

        return cols.map(col => {
          if (col.id === fromColumnId && col.id === toColumnId) {
            const activeIdx = col.cards.findIndex(c => c.id === cardId);
            return { ...col, cards: arrayMove(col.cards, activeIdx, toIndex) };
          }
          if (col.id === fromColumnId) {
            return { ...col, cards: col.cards.filter(c => c.id !== cardId) };
          }
          if (col.id === toColumnId) {
            const next = [...col.cards];
            next.splice(toIndex, 0, card);
            return { ...col, cards: next };
          }
          return col;
        });
      });
    },
    []
  );

  return { columns, renameColumn, addCard, deleteCard, moveCard };
}
