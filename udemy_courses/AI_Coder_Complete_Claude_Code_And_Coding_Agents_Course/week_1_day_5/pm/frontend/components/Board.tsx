'use client';
import { useState, useEffect } from 'react';
import { useKanban } from '@/hooks/useKanban';
import { drag } from '@/lib/dragState';
import Column from './Column';
import ChatSidebar from './ChatSidebar';

type BoardProps = {
  token: string;
  onLogout: () => void;
};

export default function Board({ token, onLogout }: BoardProps) {
  const { columns, loading, error, renameColumn, addCard, deleteCard, moveCard, refreshBoard } = useKanban(token);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (error?.includes('401')) onLogout();
  }, [error, onLogout]);

  // Reset dragState singleton if a drag ends outside the board (browser-level cancel)
  useEffect(() => {
    const reset = () => { drag.active = false; };
    document.addEventListener('dragend', reset);
    return () => document.removeEventListener('dragend', reset);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-sm" style={{ color: '#888888' }}>Loading board…</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Error banner — shown for non-401 errors without hiding the board */}
      {error && !error.includes('401') && (
        <div className="shrink-0 px-4 py-2 text-xs text-center text-white" style={{ backgroundColor: '#c0392b' }}>
          {error}
        </div>
      )}

      <div className="flex flex-1 min-h-0">
      {/* Board area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-auto">
        {/* Toolbar */}
        <div className="flex justify-end px-6 pt-4 pb-0">
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
            style={
              sidebarOpen
                ? { backgroundColor: '#032147', color: '#ecad0a' }
                : { backgroundColor: '#ecad0a', color: '#032147' }
            }
          >
            {sidebarOpen ? '✕ Close AI' : '✦ Open AI'}
          </button>
        </div>

        {/* Columns */}
        <div className="flex gap-5 p-6 items-start">
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
      </div>

      {/* AI Sidebar */}
      {sidebarOpen && (
        <ChatSidebar token={token} onBoardRefresh={refreshBoard} />
      )}
      </div>
    </div>
  );
}
