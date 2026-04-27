import { betterAuth } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getDatabase } from "@/lib/db";

const secret =
  process.env.AUTH_SECRET ??
  process.env.BETTER_AUTH_SECRET ??
  "6f2b9d8c1a4e7f0b3c5d9a8e1f2b7c4d6e8a0f3c5b7d9e1a4c6f8b0d2e4a6c8";

if (
  !process.env.AUTH_SECRET &&
  !process.env.BETTER_AUTH_SECRET &&
  process.env.NODE_ENV !== "production"
) {
  console.warn("AUTH_SECRET is not set; using a development fallback secret.");
}

export const auth = betterAuth({
  appName: "TinyNotes",
  baseURL: process.env.APP_URL ?? "http://localhost:3000",
  database: getDatabase(),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 6,
  },
  secret,
});

export async function getServerSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export type ServerSession = Awaited<ReturnType<typeof getServerSession>>;

export async function requireSession() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}
