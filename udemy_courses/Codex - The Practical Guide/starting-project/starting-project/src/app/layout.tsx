import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getServerSession } from "@/lib/auth";

const inter = localFont({
  src: [
    { path: "../../public/fonts/Inter-Variable.ttf", style: "normal" },
    { path: "../../public/fonts/Inter-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TinyNotes",
  description: "A tiny notes app (scaffold)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.variable} bg-slate-950 text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#07111d_0%,#040814_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />

          <SiteHeader session={session} />

          <main className="relative z-10 py-10">
            <Container>{children}</Container>
          </main>
        </div>
      </body>
    </html>
  );
}
