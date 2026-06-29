import Board from '@/components/Board';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header style={{ backgroundColor: '#032147' }} className="shrink-0">
        <div className="px-6 pt-5 pb-4">
          <div className="pb-3" style={{ borderBottom: '2px solid #ecad0a' }}>
            <h1
              className="text-xl font-bold tracking-widest uppercase"
              style={{ color: '#ffffff' }}
            >
              Kanban
            </h1>
            <p className="text-xs mt-0.5" style={{ color: '#888888' }}>
              Project Management Board
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <Board />
      </main>
    </div>
  );
}
