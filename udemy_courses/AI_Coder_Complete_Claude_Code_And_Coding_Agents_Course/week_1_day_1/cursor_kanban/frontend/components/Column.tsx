"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import type { Board, Column as ColumnType } from "@/lib/types";
import { AddCardForm } from "./AddCardForm";
import { KanbanCard } from "./KanbanCard";

type ColumnProps = {
  column: ColumnType;
  board: Board;
  onRename: (columnId: string, title: string) => void;
  onAddCard: (columnId: string, title: string, details: string) => void;
  onDeleteCard: (cardId: string) => void;
};

export function Column({
  column,
  board,
  onRename,
  onAddCard,
  onDeleteCard,
}: ColumnProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(column.title);
  const [showAddForm, setShowAddForm] = useState(false);

  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  const cards = column.cardIds
    .map((cardId) => board.cards[cardId])
    .filter(Boolean);

  function commitRename() {
    const trimmed = draftTitle.trim();
    if (trimmed) onRename(column.id, trimmed);
    else setDraftTitle(column.title);
    setIsEditing(false);
  }

  return (
    <section
      className="flex w-72 shrink-0 flex-col rounded-xl border border-blue-primary/20 bg-[#f4f8fb]"
      data-testid={`column-${column.id}`}
    >
      <header className="border-b-2 border-accent-yellow px-4 py-3">
        <div className="mb-1 flex items-center justify-between gap-2">
          {isEditing ? (
            <input
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              onBlur={commitRename}
              onKeyDown={(event) => {
                if (event.key === "Enter") commitRename();
                if (event.key === "Escape") {
                  setDraftTitle(column.title);
                  setIsEditing(false);
                }
              }}
              aria-label="Column title"
              className="w-full rounded border border-blue-primary/40 bg-white px-2 py-1 text-sm font-semibold text-dark-navy outline-none"
              autoFocus
              data-testid={`column-title-input-${column.id}`}
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-left text-sm font-semibold text-dark-navy transition hover:text-blue-primary"
              data-testid={`column-title-${column.id}`}
            >
              {column.title}
            </button>
          )}
          <span className="rounded-full bg-blue-primary/10 px-2 py-0.5 text-xs font-medium text-blue-primary">
            {cards.length}
          </span>
        </div>
      </header>

      <div
        ref={setNodeRef}
        className={`flex min-h-48 flex-1 flex-col gap-3 p-3 transition ${
          isOver ? "rounded-lg bg-blue-primary/5 ring-2 ring-blue-primary/30" : ""
        }`}
      >
        <SortableContext items={column.cardIds} strategy={verticalListSortingStrategy}>
          {cards.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-text">No cards yet</p>
          ) : (
            cards.map((card) => (
              <KanbanCard key={card.id} card={card} onDelete={onDeleteCard} />
            ))
          )}
        </SortableContext>

        {showAddForm ? (
          <AddCardForm
            onAdd={(title, details) => {
              onAddCard(column.id, title, details);
              setShowAddForm(false);
            }}
            onCancel={() => setShowAddForm(false)}
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="mt-auto rounded-md border border-dashed border-purple-secondary/40 px-3 py-2 text-sm font-medium text-purple-secondary transition hover:border-purple-secondary hover:bg-purple-secondary/5"
            data-testid={`add-card-button-${column.id}`}
          >
            Add card
          </button>
        )}
      </div>
    </section>
  );
}
