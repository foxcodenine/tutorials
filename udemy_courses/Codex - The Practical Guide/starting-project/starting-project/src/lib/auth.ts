import { betterAuth } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getDatabase } from "@/lib/db";

const isProduction = process.env.NODE_ENV === "production";
const developmentSecret = "6f2b9d8c1a4e7f0b3c5d9a8e1f2b7c4d6e8a0f3c5b7d9e1a4c6f8b0d2e4a6c8";

function getAuthSecret() {
  const configuredSecret = process.env.AUTH_SECRET ?? process.env.BETTER_AUTH_SECRET;

  if (configuredSecret) {
    return configuredSecret;
  }

  if (isProduction) {
    throw new Error("AUTH_SECRET or BETTER_AUTH_SECRET must be set in production.");
  }

  console.warn("AUTH_SECRET is not set; using a development fallback secret.");

  return developmentSecret;
}

function getAuthBaseUrl() {
  const configuredUrl = process.env.APP_URL;

  if (!configuredUrl) {
    if (isProduction) {
      throw new Error("APP_URL must be set in production.");
    }

    return "http://localhost:3000";
  }

  if (isProduction && !configuredUrl.startsWith("https://")) {
    throw new Error("APP_URL must use HTTPS in production.");
  }

  return configuredUrl;
}

export const auth = betterAuth({
  appName: "TinyNotes",
  baseURL: getAuthBaseUrl(),
  database: getDatabase(),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 6,
  },
  secret: getAuthSecret(),
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
