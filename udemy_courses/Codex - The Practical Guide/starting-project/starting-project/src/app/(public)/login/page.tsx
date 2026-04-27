import { AuthCredentialsForm } from "@/components/auth/AuthCredentialsForm";
import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/notes");
  }

  return (
    <AuthCredentialsForm
      mode="login"
      subtitle="Use your email and password to access TinyNotes."
      switchHref="/register"
      switchLabel="Create one"
      switchPrompt="Need an account?"
      title="Login"
    />
  );
}
