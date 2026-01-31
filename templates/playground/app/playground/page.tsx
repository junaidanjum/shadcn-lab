import {
  ButtonSection,
  InputSection,
  AccordionSection,
  AlertSection,
} from "./sections";

type Section = {
  id: string;
  title: string;
  description: string;
  Component: React.FC;
};

export const BasicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

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
];

export default function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-56 border-r px-6 py-12 text-sm overflow-y-auto">
        <div className="mb-4 font-semibold">Components</div>
        <nav className="space-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block text-muted-foreground hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 px-8 py-10 space-y-20 overflow-y-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">shadcn-lab</h1>
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
