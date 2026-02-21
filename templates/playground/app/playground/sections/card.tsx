import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
          <CardAction>
            <Button variant="link" size="sm">
              Docs
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-project">Name</Label>
            <Input id="card-project" placeholder="shadcn-lab" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-framework">Framework</Label>
            <Input id="card-framework" defaultValue="Next.js" />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </CardFooter>
      </Card>

      <br />
      <h2 className="font-medium">Size</h2>
      <Card size="sm" className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            This card uses the small size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The card component supports a size prop that can be set to
            &quot;sm&quot; for a more compact appearance.
          </p>
        </CardContent>
        <CardFooter className="justify-end">
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>

      <br />
      <h2 className="font-medium">Image</h2>
      <Card className="w-full max-w-md overflow-hidden pt-0">
        <img
          src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1200&auto=format&fit=crop"
          alt="Event cover"
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <Badge variant="secondary" className="w-fit">
            Featured
          </Badge>
          <CardTitle>Design systems meetup</CardTitle>
          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
