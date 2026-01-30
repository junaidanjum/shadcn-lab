// templates/playground/app/playground/sections/buttons.tsx
import { Button } from "@/components/ui/button";

export default function Buttons() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Buttons</h2>

      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
    </section>
  );
}
