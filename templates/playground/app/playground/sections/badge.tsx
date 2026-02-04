import { PlusIcon } from "./icons";

import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export default function BadgeSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Variants </h2>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </div>
      <br />
      <h2 className="font-medium">With Icon</h2>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          <PlusIcon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="outline">
          Bookmark
          <PlusIcon data-icon="inline-end" />
        </Badge>
      </div>
      <br />
      <h2 className="font-medium">With Spinner</h2>
      <div className="flex flex-wrap gap-2">
        <Badge variant="destructive">
          <Spinner data-icon="inline-start" />
          Deleting
        </Badge>
        <Badge variant="secondary">
          Generating
          <Spinner data-icon="inline-end" />
        </Badge>
      </div>
      <br />
      <h2 className="font-medium">Link</h2>
      <Badge asChild>
        <a href="#link">
          Open Link <PlusIcon data-icon="inline-end" />
        </a>
      </Badge>
      <br />
      <h2 className="font-medium">Custom Colors</h2>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Blue
        </Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Green
        </Badge>
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          Sky
        </Badge>
        <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Purple
        </Badge>
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          Red
        </Badge>
      </div>
    </section>
  );
}
