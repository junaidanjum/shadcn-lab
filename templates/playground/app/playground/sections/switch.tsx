import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <div className="flex items-center gap-4">
        <Switch />
        <Switch defaultChecked />
      </div>

      <br />
      <h2 className="font-medium">With Label</h2>
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <br />
      <h2 className="font-medium">Small</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch id="compact-mode" size="sm" />
          <Label htmlFor="compact-mode">Compact mode</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="default-size" />
          <Label htmlFor="default-size">Default size</Label>
        </div>
      </div>

      <br />
      <h2 className="font-medium">Disabled</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch disabled id="disabled-off" />
          <Label htmlFor="disabled-off">Disabled off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch disabled defaultChecked id="disabled-on" />
          <Label htmlFor="disabled-on">Disabled on</Label>
        </div>
      </div>

      <br />
      <h2 className="font-medium">Settings List</h2>
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Push notifications</Label>
          <Switch id="notifications" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing">Marketing emails</Label>
          <Switch id="marketing" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="analytics">Usage analytics</Label>
          <Switch id="analytics" defaultChecked />
        </div>
      </div>
    </section>
  );
}
