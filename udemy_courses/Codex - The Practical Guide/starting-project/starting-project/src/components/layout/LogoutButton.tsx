"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/login");
            router.refresh();
          },
        },
      });
    });
  }

  return (
    <Button
      className="rounded-full bg-slate-800 px-4 py-2 text-slate-100 hover:bg-slate-700"
      disabled={isPending}
      type="button"
      onClick={handleLogout}
    >
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
}
