import { copyFile, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SOURCE = resolve(root, "templates/playground/app/playground/page.tsx");
const OUT = resolve(root, "apps/preview/public/r/playground.json");
const PREVIEW = resolve(root, "apps/preview/app/playground/page.tsx");

const registryDependencies = [
  "accordion",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "card",
  "checkbox",
  "dialog",
  "dropdown-menu",
  "field",
  "input",
  "label",
  "select",
  "spinner",
  "switch",
  "tabs",
  "tooltip",
];

const content = await readFile(SOURCE, "utf8");

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "playground",
  type: "registry:page",
  title: "shadcn-lab Playground",
  description:
    "In-app playground to preview shadcn/ui components in your project.",
  dependencies: ["lucide-react"],
  registryDependencies,
  files: [
    {
      path: "app/playground/page.tsx",
      type: "registry:page",
      target: "app/playground/page.tsx",
      content,
    },
  ],
};

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(registry, null, 2) + "\n");
await mkdir(dirname(PREVIEW), { recursive: true });
await copyFile(SOURCE, PREVIEW);

console.log(`Wrote ${OUT}`);
console.log(`Synced ${PREVIEW}`);
