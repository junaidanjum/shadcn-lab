import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>

      <br />
      <h2 className="font-medium">Grouped</h2>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern (EST)</SelectItem>
            <SelectItem value="cst">Central (CST)</SelectItem>
            <SelectItem value="pst">Pacific (PST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">GMT</SelectItem>
            <SelectItem value="cet">Central European (CET)</SelectItem>
            <SelectItem value="eet">Eastern European (EET)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="ist">India (IST)</SelectItem>
            <SelectItem value="jst">Japan (JST)</SelectItem>
            <SelectItem value="cst-cn">China (CST)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <br />
      <h2 className="font-medium">Small</h2>
      <Select>
        <SelectTrigger size="sm" className="w-[200px]">
          <SelectValue placeholder="Pick a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </SelectContent>
      </Select>

      <br />
      <h2 className="font-medium">Disabled</h2>
      <Select disabled>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">One</SelectItem>
        </SelectContent>
      </Select>

      <br />
      <h2 className="font-medium">With Disabled Items</h2>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Choose plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise (coming soon)
          </SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
