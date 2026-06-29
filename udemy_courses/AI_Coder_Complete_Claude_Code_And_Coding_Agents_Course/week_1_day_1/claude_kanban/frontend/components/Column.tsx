'use client';
import { useRef, useState } from 'react';
import { Column as ColumnType, Card } from '@/lib/types';
import { drag } from '@/lib/dragState';
import KanbanCard from './KanbanCard';
import AddCardForm from './AddCardForm';

interface Props {
  column: ColumnType;
  onRename: (name: string) => void;
  onAddCard: (card: Omit<Card, 'id'>) => void;
  onDeleteCard: (cardId: string) => void;
  moveCard: (cardId: string, fromColId: string, toColId: string, toIndex: number) => void;
}

export default function Column({ column, onRename, onAddCard, onDeleteCard, moveCard }: Props) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [editName, setEditName] = useState(column.name);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const hoverIndex = useRef(column.cards.length);

  function commitRename() {
    const trimmed = editName.trim();
    if (trimmed && trimmed !== column.name) onRename(trimmed);
    else setEditName(column.name);
    setIsRenaming(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (!drag.active) return;
    moveCard(drag.cardId, drag.fromColId, column.id, hoverIndex.current);
    drag.active = false;
    setIsDragOver(false);
  }

  return (
    <div className="flex flex-col w-72 shrink-0">
      {/* Column header */}
      <div className="flex items-center gap-2 mb-3 px-1">
        {isRenaming ? (
          <input
            autoFocus
            value={editName}
            onChange={e => setEditName(e.target.value)}
            onBlur={commitRename}
            onKeyDown={e => {
              if (e.key === 'Enter') commitRename();
              if (e.key === 'Escape') { setEditName(column.name); setIsRenaming(false); }
            }}
            className="flex-1 text-sm font-bold text-[#032147] bg-white border border-[#209dd7] rounded px-2 py-1 outline-none"
          />
        ) : (
          <button
            onClick={() => { setEditName(column.name); setIsRenaming(true); }}
            className="flex-1 text-sm font-bold text-[#032147] text-left hover:text-[#209dd7] transition-colors truncate"
            title="Click to rename"
          >
            {column.name}
          </button>
        )}
        <span className="shrink-0 text-xs text-[#888888] bg-white border border-gray-200 rounded-full px-2 py-0.5 font-medium tabular-nums">
          {column.cards.length}
        </span>
      </div>

      {/* Drop zone — owns all drop events including those bubbled from cards */}
      <div
        onDragOver={e => {
          e.preventDefault();
          setIsDragOver(true);
          // Only set hoverIndex here when dragging over column background
          // (card's onDragOver calls stopPropagation, so this only fires for empty space)
          hoverIndex.current = column.cards.length;
        }}
        onDragLeave={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsDragOver(false);
          }
        }}
        onDrop={handleDrop}
        className={`flex flex-col gap-2 flex-1 rounded-xl p-2 min-h-24 transition-colors duration-150 ${
          isDragOver ? 'bg-[#209dd7]/10 ring-2 ring-[#209dd7]/30' : 'bg-gray-100/70'
        }`}
      >
        {column.cards.map((card, index) => (
          <KanbanCard
            key={card.id}
            card={card}
            colId={column.id}
            onDelete={() => onDeleteCard(card.id)}
            onHover={() => {
              hoverIndex.current = index;
              setIsDragOver(true);
            }}
          />
        ))}

        <div className="mt-auto pt-1">
          {isAddingCard ? (
            <AddCardForm
              onSubmit={card => { onAddCard(card); setIsAddingCard(false); }}
              onCancel={() => setIsAddingCard(false)}
            />
          ) : (
            <button
              onClick={() => setIsAddingCard(true)}
              className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs text-[#888888] hover:text-[#753991] hover:bg-white/80 transition-all duration-150 font-medium"
            >
              <span className="text-base leading-none font-light">+</span> Add card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
