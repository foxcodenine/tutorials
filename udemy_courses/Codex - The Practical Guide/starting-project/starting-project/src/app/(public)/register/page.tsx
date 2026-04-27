import { AuthCredentialsForm } from "@/components/auth/AuthCredentialsForm";
import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/notes");
  }

  return (
    <AuthCredentialsForm
      mode="register"
      subtitle="Create your TinyNotes account with email and password."
      switchHref="/login"
      switchLabel="Log in"
      switchPrompt="Already have an account?"
      title="Register"
    />
  );
}
