'use client';
import { useKanban } from '@/hooks/useKanban';
import Column from './Column';

export default function Board() {
  const { columns, renameColumn, addCard, deleteCard, moveCard } = useKanban();

  return (
    <div className="flex gap-5 p-6 min-h-full items-start">
      {columns.map(col => (
        <Column
          key={col.id}
          column={col}
          onRename={name => renameColumn(col.id, name)}
          onAddCard={card => addCard(col.id, card)}
          onDeleteCard={cardId => deleteCard(col.id, cardId)}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
}
