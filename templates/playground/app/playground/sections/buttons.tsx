import { Button } from "@/components/ui/button";
import { PlusIcon } from "../sections/icons";
import { Spinner } from "@/components/ui/spinner";

export default function Buttons() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Variants</h2>
      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </div>
      <br />
      <h2 className="font-medium">Size</h2>
      <div className="flex gap-3 flex-wrap">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
      <br />
      <h2 className="font-medium">Icon</h2>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline">
          <PlusIcon /> New Branch
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <PlusIcon />
        </Button>
      </div>
      <br />
      <h2 className="font-medium">Spinner</h2>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" disabled>
          <Spinner data-icon="inline-start" />
          Generating
        </Button>
        <Button variant="secondary" disabled>
          Downloading
          <Spinner data-icon="inline-start" />
        </Button>
      </div>
    </section>
  );
}
