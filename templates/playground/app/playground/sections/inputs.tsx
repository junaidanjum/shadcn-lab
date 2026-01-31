import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Inputs() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Variants</h2>
      <div className="flex gap-3 flex-wrap">
        <Field>
          <FieldLabel>Basic</FieldLabel>
          <Input placeholder="Enter text" />
        </Field>
        <Field data-disabled>
          <FieldLabel htmlFor="input-demo-disabled">Disabled</FieldLabel>
          <Input
            id="input-demo-disabled"
            type="email"
            placeholder="Disabled input"
            disabled
          />
          <FieldDescription>This field is currently disabled.</FieldDescription>
        </Field>
      </div>
      <Field data-invalid>
        <FieldLabel htmlFor="input-invalid">Invalid</FieldLabel>
        <Input id="input-invalid" placeholder="Error" aria-invalid />
        <FieldDescription>
          This field contains validation errors.
        </FieldDescription>
      </Field>
    </section>
  );
}
