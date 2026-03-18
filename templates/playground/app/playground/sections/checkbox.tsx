import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <div className="flex items-center gap-4">
        <Checkbox />
        <Checkbox defaultChecked />
      </div>

      <br />
      <h2 className="font-medium">With Label</h2>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <br />
      <h2 className="font-medium">Disabled</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="disabled-unchecked" disabled />
          <Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled-checked" disabled defaultChecked />
          <Label htmlFor="disabled-checked">Disabled checked</Label>
        </div>
      </div>

      <br />
      <h2 className="font-medium">Group</h2>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">Select your interests</p>
        <div className="flex items-center gap-2">
          <Checkbox id="design" defaultChecked />
          <Label htmlFor="design">Design</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="development" defaultChecked />
          <Label htmlFor="development">Development</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">Marketing</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="analytics" />
          <Label htmlFor="analytics">Analytics</Label>
        </div>
      </div>

      <br />
      <h2 className="font-medium">With Description</h2>
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex gap-2">
          <Checkbox id="email-notifications" className="mt-0.5" />
          <div className="grid gap-1">
            <Label htmlFor="email-notifications">Email notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications when someone mentions you.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Checkbox id="push-notifications" className="mt-0.5" defaultChecked />
          <div className="grid gap-1">
            <Label htmlFor="push-notifications">Push notifications</Label>
            <p className="text-sm text-muted-foreground">
              Get push notifications on your mobile device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
