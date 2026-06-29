"use client";

import { useState } from "react";

type LoginPageProps = {
  onSuccess: (token: string) => void;
};

export default function LoginPage({ onSuccess }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError("Invalid username or password.");
        return;
      }
      const data = await res.json();
      onSuccess(data.token);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Floating card */}
      <div
        className="flex w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 8px 40px rgba(3,33,71,0.13)" }}
      >
        {/* Left accent panel */}
        <div
          className="hidden md:flex flex-col justify-between p-10 w-2/5"
          style={{ backgroundColor: "#032147" }}
        >
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-1"
              style={{ color: "#ecad0a" }}
            >
              Kanban
            </p>
            <h2
              className="text-2xl font-bold leading-snug mt-6"
              style={{ color: "#ffffff" }}
            >
              Organise your work,<br />your way.
            </h2>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "#6b8ab0" }}>
              Drag, prioritise, and ship — all in one place.
            </p>
          </div>

          {/* Decorative bar chart */}
          <div className="flex items-end gap-2 opacity-20">
            {[40, 65, 30, 55, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}px`, backgroundColor: "#ecad0a" }}
              />
            ))}
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex flex-1 flex-col justify-center bg-white px-10 py-10">
          <h1
            className="text-xl font-bold mb-1"
            style={{ color: "#032147" }}
          >
            Welcome to <span style={{ color: "#209dd7" }}>Kanban</span>
          </h1>
          <p className="text-xs mb-7" style={{ color: "#9aabb8" }}>
            Sign in to your board
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs mb-1"
                style={{ color: "#6b8ab0" }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="your username"
                className="w-full border-b border-gray-200 bg-transparent px-0 py-1.5 text-sm outline-none transition-colors focus:border-[#209dd7]"
                style={{ color: "#032147" }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs mb-1"
                style={{ color: "#6b8ab0" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full border-b border-gray-200 bg-transparent px-0 py-1.5 text-sm outline-none transition-colors focus:border-[#209dd7]"
                style={{ color: "#032147" }}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded bg-red-50 border border-red-200 px-3 py-2">
                <span className="text-red-500 text-sm">⚠</span>
                <p className="text-xs text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 mt-2"
              style={{ backgroundColor: "#209dd7", color: "#ffffff" }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
