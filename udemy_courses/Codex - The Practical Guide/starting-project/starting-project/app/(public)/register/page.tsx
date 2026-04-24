import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Register" subtitle="Placeholder UI only (no auth logic yet)." />

      <Card className="space-y-4 p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Name</span>
            <Input placeholder="Jane Doe" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Email</span>
            <Input placeholder="you@example.com" type="email" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Password</span>
            <Input placeholder="••••••••" type="password" />
          </label>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">This is dummy content. No submit/action yet.</p>
          <Button type="button">Create account</Button>
        </div>
      </Card>
    </div>
  );
}

