"use client";

import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import type { Board } from "@/lib/types";
import {
  addCard,
  deleteCard,
  findColumnByCardId,
  moveCard,
  renameColumn,
} from "@/lib/board";
import { seedBoard } from "@/lib/seed";
import { Column } from "./Column";
import { KanbanCardOverlay } from "./KanbanCard";

export function Board() {
  const [board, setBoard] = useState<Board>(() => structuredClone(seedBoard));
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveCardId(String(event.active.id));
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveCardId(null);

    const { active, over } = event;
    if (!over) return;

    const cardId = String(active.id);
    const overId = String(over.id);

    const activeColumn = findColumnByCardId(board, cardId);
    if (!activeColumn) return;

    const overColumn =
      board.columns.find((column) => column.id === overId) ??
      findColumnByCardId(board, overId);

    if (!overColumn) return;

    const toIndex =
      overId === overColumn.id
        ? overColumn.cardIds.length
        : overColumn.cardIds.indexOf(overId);

    if (toIndex === -1) return;

    setBoard((current) => moveCard(current, cardId, overColumn.id, toIndex));
  }

  const activeCard = activeCardId ? board.cards[activeCardId] : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#eef3f8]">
      <header className="border-b border-accent-yellow/30 bg-white px-6 py-5 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-primary">
          Project Board
        </p>
        <h1 className="mt-1 text-2xl font-bold text-dark-navy">Kanban MVP</h1>
        <p className="mt-1 text-sm text-gray-text">
          Drag cards between columns, rename columns, and manage tasks in one place.
        </p>
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <main className="flex-1 overflow-x-auto p-6">
          <div className="flex min-h-full gap-4" data-testid="kanban-board">
            {board.columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                board={board}
                onRename={(columnId, title) =>
                  setBoard((current) => renameColumn(current, columnId, title))
                }
                onAddCard={(columnId, title, details) =>
                  setBoard((current) => addCard(current, columnId, title, details))
                }
                onDeleteCard={(cardId) =>
                  setBoard((current) => deleteCard(current, cardId))
                }
              />
            ))}
          </div>
        </main>

        <DragOverlay>
          {activeCard ? <KanbanCardOverlay card={activeCard} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
