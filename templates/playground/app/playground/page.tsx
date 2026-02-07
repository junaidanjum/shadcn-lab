import { Button } from "@/components/ui/button";
import {
  ButtonSection,
  InputSection,
  AccordionSection,
  AlertSection,
  AlertDialogSection,
  AvatarSection,
  BadgeSection,
  BreadcrumbSection,
} from "./sections";
import { Github } from "lucide-react";

type Section = {
  id: string;
  title: string;
  description: string;
  Component: React.FC;
};

const sections: Section[] = [
  {
    id: "button",
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    Component: ButtonSection,
  },
  {
    id: "input",
    title: "Input",
    description:
      "A text input component for forms and user data entry with built-in styling and accessibility features.",
    Component: InputSection,
  },
  {
    id: "accordion",
    title: "Accordion",
    description:
      "A vertically stacked set of interactive headings that reveal or hide associated sections of content.",
    Component: AccordionSection,
  },
  {
    id: "alert",
    title: "Alert",
    description:
      "A component used to display important messages or notifications to users, often requiring their attention.",
    Component: AlertSection,
  },
  {
    id: "alert-dialog",
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user's workflow to communicate an important message and requires a response.",
    Component: AlertDialogSection,
  },
  {
    id: "avatar",
    title: "Avatar",
    description:
      "A graphical representation of a user or entity, often displayed as a profile picture or icon.",
    Component: AvatarSection,
  },
  {
    id: "badge",
    title: "Badge",
    description:
      "A small visual indicator used to display status, counts, or labels associated with an item or component.",
    Component: BadgeSection,
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    Component: BreadcrumbSection,
  },
];

export default function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-56 border-r px-6 py-12 text-sm overflow-y-auto">
        <div className="mb-4 font-semibold">Components</div>
        <nav className="flex flex-col gap-1">
          {sections.map((s) => (
            <div key={s.id}>
              <Button variant="ghost" size="sm" asChild>
                <a href={`#${s.id}`}>{s.title}</a>
              </Button>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 px-8 py-10 space-y-20 overflow-y-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter flex items-center gap-3">
            shadcn-lab
            <a
              target="_blank"
              href="https://github.com/junaidanjum/shadcn-lab"
              className="text-muted-foreground"
            >
              <Github size={16} />
            </a>
          </h1>
          <p className="text-sm text-muted-foreground">UI playground</p>
        </div>

        {sections.map(({ id, title, description, Component }) => (
          <section key={id} id={id} className="max-w-3xl space-y-6">
            <header className="space-y-1">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </header>

            <div className="rounded-lg border p-6 flex ">
              <Component />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
