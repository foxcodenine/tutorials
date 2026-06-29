"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Card } from "@/lib/types";

type KanbanCardProps = {
  card: Card;
  onDelete: (cardId: string) => void;
};

export function KanbanCard({ card, onDelete }: KanbanCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      data-testid={`card-${card.id}`}
      className={`group rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition ${
        isDragging ? "opacity-40 shadow-md ring-2 ring-accent-yellow" : "hover:shadow-md"
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <button
          type="button"
          className="flex-1 cursor-grab text-left active:cursor-grabbing"
          aria-label={`Drag card ${card.title}`}
          {...attributes}
          {...listeners}
        >
          <h3 className="text-sm font-semibold text-dark-navy">{card.title}</h3>
        </button>
        <button
          type="button"
          onClick={() => onDelete(card.id)}
          aria-label={`Delete card ${card.title}`}
          className="rounded px-1.5 py-0.5 text-xs text-gray-text opacity-0 transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
        >
          Delete
        </button>
      </div>
      <p className="text-sm leading-relaxed text-gray-text">{card.details}</p>
    </article>
  );
}

type KanbanCardOverlayProps = {
  card: Card;
};

export function KanbanCardOverlay({ card }: KanbanCardOverlayProps) {
  return (
    <article className="rounded-lg border-2 border-accent-yellow bg-white p-3 shadow-lg">
      <h3 className="text-sm font-semibold text-dark-navy">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-text">{card.details}</p>
    </article>
  );
}
