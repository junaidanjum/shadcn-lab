// templates/playground/app/playground/page.tsx
import Buttons from "./sections/buttons";
import Inputs from "./sections/inputs";

export default function Playground() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-2xl font-bold">UI Playground</h1>
      <Buttons />
      <Inputs />
    </div>
  );
}
