'use client';
import { useState } from 'react';
import { Card } from '@/lib/types';
import { drag } from '@/lib/dragState';

interface Props {
  card: Card;
  colId: string;
  onDelete: () => void;
  onHover: () => void;
}

export default function KanbanCard({ card, colId, onDelete, onHover }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      draggable
      onDragStart={e => {
        drag.cardId = card.id;
        drag.fromColId = colId;
        drag.active = true;
        e.dataTransfer.effectAllowed = 'move';
        setIsDragging(true);
      }}
      onDragEnd={() => {
        drag.active = false;
        setIsDragging(false);
      }}
      onDragOver={e => {
        e.preventDefault();
        e.stopPropagation(); // prevent column from overriding hoverIndex
        onHover();
      }}
      // No onDrop — let event bubble up to the column div
      data-testid={`card-${card.id}`}
      className={`bg-white rounded-lg border border-gray-100 p-3 cursor-grab active:cursor-grabbing group relative select-none transition-all duration-150 ${
        isDragging
          ? 'opacity-40 shadow-none'
          : 'shadow-sm hover:shadow-md hover:border-[#ecad0a]/40'
      }`}
    >
      <div className="pr-5">
        <p className="text-sm font-semibold text-[#032147] leading-tight">{card.title}</p>
        {card.details && (
          <p className="text-xs text-[#888888] mt-1 leading-relaxed line-clamp-2">
            {card.details}
          </p>
        )}
      </div>
      <button
        onClick={e => { e.stopPropagation(); onDelete(); }}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all text-base leading-none"
        aria-label="Delete card"
      >
        ×
      </button>
    </div>
  );
}
