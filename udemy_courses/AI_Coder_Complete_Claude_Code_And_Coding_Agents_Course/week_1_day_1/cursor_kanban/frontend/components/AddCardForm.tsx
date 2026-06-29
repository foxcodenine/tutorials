"use client";

import { useState } from "react";

type AddCardFormProps = {
  onAdd: (title: string, details: string) => void;
  onCancel: () => void;
};

export function AddCardForm({ onAdd, onCancel }: AddCardFormProps) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDetails = details.trim();
    if (!trimmedTitle || !trimmedDetails) return;

    onAdd(trimmedTitle, trimmedDetails);
    setTitle("");
    setDetails("");
  }

  return (
    <form
      className="mt-3 space-y-2 rounded-lg border border-accent-yellow/40 bg-white p-3 shadow-sm"
      onSubmit={handleSubmit}
      data-testid="add-card-form"
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Card title"
        aria-label="Card title"
        className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark-navy outline-none focus:border-blue-primary"
        autoFocus
      />
      <textarea
        value={details}
        onChange={(event) => setDetails(event.target.value)}
        placeholder="Card details"
        aria-label="Card details"
        rows={3}
        className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm text-dark-navy outline-none focus:border-blue-primary"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-md bg-purple-secondary px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Add card
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md px-3 py-1.5 text-sm text-gray-text transition hover:text-dark-navy"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
