"use client";

import dynamic from "next/dynamic";

const Board = dynamic(
  () => import("@/components/Board").then((mod) => ({ default: mod.Board })),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen flex-col bg-[#eef3f8]">
        <header className="border-b border-accent-yellow/30 bg-white px-6 py-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-primary">
            Project Board
          </p>
          <h1 className="mt-1 text-2xl font-bold text-dark-navy">Kanban MVP</h1>
          <p className="mt-1 text-sm text-gray-text">Loading board...</p>
        </header>
        <main className="flex-1 overflow-x-auto p-6">
          <div className="flex min-h-full gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-96 w-72 shrink-0 animate-pulse rounded-xl border border-blue-primary/20 bg-[#f4f8fb]"
              />
            ))}
          </div>
        </main>
      </div>
    ),
  }
);

export function BoardClient() {
  return <Board />;
}
