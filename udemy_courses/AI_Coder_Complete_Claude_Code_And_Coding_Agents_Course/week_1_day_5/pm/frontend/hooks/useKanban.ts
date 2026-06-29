'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Column, Card } from '@/lib/types';
import { getBoard, putBoard } from '@/lib/api';

function arrayMove<T>(arr: T[], from: number, to: number): T[] {
  const result = [...arr];
  result.splice(to, 0, result.splice(from, 1)[0]);
  return result;
}

export function useKanban(token: string) {
  const [columns, setColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const columnsRef = useRef<Column[]>([]);

  // Keep ref in sync so mutation callbacks always see latest state
  useEffect(() => {
    columnsRef.current = columns;
  }, [columns]);

  // Load board on mount
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getBoard(token)
      .then(cols => { if (!cancelled) { setColumns(cols); setLoading(false); } })
      .catch(err => { if (!cancelled) { setError(err.message); setLoading(false); } });
    return () => { cancelled = true; };
  }, [token]);

  // Optimistic update + persist to API
  const save = useCallback(async (next: Column[]) => {
    const prev = columnsRef.current;
    setError(null);
    setColumns(next);
    try {
      const saved = await putBoard(token, next);
      setColumns(saved);
    } catch (err) {
      setColumns(prev);
      setError(err instanceof Error ? err.message : 'Save failed');
    }
  }, [token]);

  const renameColumn = useCallback((columnId: string, name: string) => {
    const next = columnsRef.current.map(c =>
      c.id === columnId ? { ...c, name } : c
    );
    save(next);
  }, [save]);

  const addCard = useCallback((columnId: string, card: Omit<Card, 'id'>) => {
    const newCard: Card = { ...card, id: `card-${crypto.randomUUID()}` };
    const next = columnsRef.current.map(c =>
      c.id === columnId ? { ...c, cards: [...c.cards, newCard] } : c
    );
    save(next);
  }, [save]);

  const deleteCard = useCallback((columnId: string, cardId: string) => {
    const next = columnsRef.current.map(c =>
      c.id === columnId ? { ...c, cards: c.cards.filter(card => card.id !== cardId) } : c
    );
    save(next);
  }, [save]);

  const moveCard = useCallback(
    (cardId: string, fromColumnId: string, toColumnId: string, toIndex: number) => {
      const cols = columnsRef.current;
      const fromCol = cols.find(c => c.id === fromColumnId);
      const card = fromCol?.cards.find(c => c.id === cardId);
      if (!card) return;

      const next = cols.map(col => {
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
      save(next);
    },
    [save]
  );

  const refreshBoard = useCallback(async () => {
    try {
      const cols = await getBoard(token);
      setColumns(cols);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Refresh failed');
    }
  }, [token]);

  return { columns, loading, error, renameColumn, addCard, deleteCard, moveCard, refreshBoard };
}
