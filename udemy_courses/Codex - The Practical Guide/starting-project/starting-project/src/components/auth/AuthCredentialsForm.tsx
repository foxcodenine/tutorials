"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

import { AuthFormCard } from "@/components/auth/AuthFormCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";

type Mode = "login" | "register";

function buildDisplayName(email: string) {
  const localPart = email.split("@")[0]?.trim() || "User";
  const normalized = localPart
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) {
    return "User";
  }

  return normalized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function genericAuthErrorMessage(mode: Mode) {
  return mode === "register" ? "Could not create your account." : "Invalid email or password.";
}

export function AuthCredentialsForm({
  mode,
  title,
  subtitle,
  switchLabel,
  switchHref,
  switchPrompt,
}: {
  mode: Mode;
  title: string;
  subtitle: string;
  switchLabel: string;
  switchHref: string;
  switchPrompt: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const passwordValue = password;

    if (!trimmedEmail || !passwordValue) {
      setError("Please enter your email and password.");
      return;
    }

    setError(null);
    setIsPending(true);

    try {
      if (mode === "register") {
        const response = await authClient.signUp.email({
          email: trimmedEmail,
          password: passwordValue,
          name: buildDisplayName(trimmedEmail),
        });

        if (response.error) {
          setError(genericAuthErrorMessage(mode));
          return;
        }
      } else {
        const response = await authClient.signIn.email({
          email: trimmedEmail,
          password: passwordValue,
        });

        if (response.error) {
          setError(genericAuthErrorMessage(mode));
          return;
        }
      }

      router.replace("/notes");
      router.refresh();
    } catch {
      setError(genericAuthErrorMessage(mode));
    } finally {
      setIsPending(false);
    }
  }

  return (
    <AuthFormCard
      subtitle={subtitle}
      switchHref={switchHref}
      switchLabel={switchLabel}
      switchPrompt={switchPrompt}
      title={title}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="grid gap-1">
            <span className="text-sm text-slate-300">Email</span>
            <Input
              autoComplete="email"
              disabled={isPending}
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-slate-300">Password</span>
            <Input
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              disabled={isPending}
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {mode === "register" ? (
            <p className="text-xs text-slate-400">Use at least 6 characters.</p>
          ) : null}
        </div>

        {error ? <p className="text-sm text-rose-300">{error}</p> : null}

        <Button className="w-full py-3 mt-3 text-base" disabled={isPending} type="submit">
          {isPending
            ? mode === "register"
              ? "Creating account..."
              : "Signing in..."
            : mode === "register"
              ? "Create account"
              : "Sign in"}
        </Button>
      </form>
    </AuthFormCard>
  );
}
