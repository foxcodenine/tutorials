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
      className="px-4"
      disabled={isPending}
      type="button"
      variant="ghost"
      onClick={handleLogout}
    >
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
}
