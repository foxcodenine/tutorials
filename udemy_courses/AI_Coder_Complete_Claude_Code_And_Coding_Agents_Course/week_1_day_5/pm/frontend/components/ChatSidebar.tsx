'use client';
import { useState, useRef, useEffect } from 'react';
import { chatAI } from '@/lib/api';

type Message = { role: 'user' | 'assistant'; content: string };

type Props = {
  token: string;
  onBoardRefresh: () => Promise<void>;
};

export default function ChatSidebar({ token, onBoardRefresh }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const { reply, board_updated } = await chatAI(token, text, history);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      if (board_updated) await onBoardRefresh();
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside
      data-testid="chat-sidebar"
      className="flex flex-col w-80 shrink-0 border-l border-gray-200 bg-white"
    >
      {/* Header */}
      <div
        className="px-4 py-3 text-xs font-bold tracking-widest uppercase border-b border-gray-100"
        style={{ color: '#032147' }}
      >
        AI Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {messages.length === 0 && (
          <p className="text-xs text-center mt-6" style={{ color: '#888888' }}>
            Ask me to add cards, move tasks, or reorganise your board.
          </p>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'text-[#032147] font-medium'
                  : 'bg-gray-100/80 text-[#032147]'
              }`}
              style={
                msg.role === 'user'
                  ? { backgroundColor: '#ecad0a' }
                  : undefined
              }
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100/80 rounded-xl px-3 py-2">
              <span className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
            placeholder="Ask the AI…"
            disabled={loading}
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none transition-colors focus:border-[#209dd7] focus:ring-1 focus:ring-[#209dd7] disabled:opacity-50"
            style={{ color: '#032147' }}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="px-3 py-2 rounded-lg text-xs font-semibold transition-opacity hover:opacity-90 disabled:opacity-40"
            style={{ backgroundColor: '#ecad0a', color: '#032147' }}
          >
            Send
          </button>
        </div>
      </div>
    </aside>
  );
}
