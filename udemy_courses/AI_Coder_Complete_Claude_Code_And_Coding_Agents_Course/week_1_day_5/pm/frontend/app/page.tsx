"use client";

import { useEffect, useState } from "react";
import Board from "@/components/Board";
import LoginPage from "@/components/LoginPage";

export default function Home() {
  // undefined = not yet checked, null = logged out, string = authenticated
  const [token, setToken] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  if (token === undefined) return null;

  if (!token) {
    return (
      <LoginPage
        onSuccess={(tok) => {
          sessionStorage.setItem("token", tok);
          setToken(tok);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      <header style={{ backgroundColor: "#032147" }} className="shrink-0">
        <div className="px-6 pt-5 pb-4">
          <div className="pb-3 flex items-end justify-between" style={{ borderBottom: "2px solid #ecad0a" }}>
            <div>
              <h1
                className="text-xl font-bold tracking-widest uppercase"
                style={{ color: "#ffffff" }}
              >
                Kanban
              </h1>
              <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                Project Management Board
              </p>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem("token");
                setToken(null);
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-80"
              style={{ color: "#032147", backgroundColor: "#ecad0a" }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <Board
          token={token}
          onLogout={() => {
            sessionStorage.removeItem("token");
            setToken(null);
          }}
        />
      </main>
    </div>
  );
}
