import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Inputs() {
  return (
    <section className="space-y-4 max-w-sm">
      <h2 className="text-lg font-semibold">Inputs</h2>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input placeholder="hello@example.com" />
      </div>

      <div className="space-y-2">
        <Label>Disabled</Label>
        <Input disabled placeholder="Disabled input" />
      </div>
    </section>
  );
}
