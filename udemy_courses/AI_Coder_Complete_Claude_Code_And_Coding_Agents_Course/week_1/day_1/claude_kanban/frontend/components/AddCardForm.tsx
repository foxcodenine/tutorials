'use client';
import { useState } from 'react';
import { Card } from '@/lib/types';

interface Props {
  onSubmit: (card: Omit<Card, 'id'>) => void;
  onCancel: () => void;
}

export default function AddCardForm({ onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onSubmit({ title: trimmed, details: details.trim() });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-[#209dd7]/40 shadow-sm p-3"
    >
      <input
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => e.key === 'Escape' && onCancel()}
        placeholder="Card title"
        className="w-full text-sm font-semibold text-[#032147] outline-none border-b border-gray-100 pb-1.5 mb-2 placeholder:text-gray-300"
      />
      <textarea
        value={details}
        onChange={e => setDetails(e.target.value)}
        placeholder="Details (optional)"
        rows={2}
        className="w-full text-xs text-[#888888] outline-none resize-none placeholder:text-gray-300 leading-relaxed"
      />
      <div className="flex items-center gap-2 mt-2.5">
        <button
          type="submit"
          disabled={!title.trim()}
          className="px-3 py-1.5 bg-[#753991] text-white text-xs font-semibold rounded hover:bg-[#5c2d72] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Add card
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-2 py-1.5 text-[#888888] text-xs hover:text-[#032147] transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
