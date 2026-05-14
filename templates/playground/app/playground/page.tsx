import Link from "next/link";
import {
  AppWindowIcon,
  CodeIcon,
  Github,
  InfoIcon,
  PlusIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ButtonSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Variants</h2>
      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </div>
      <br />
      <h2 className="font-medium">Size</h2>
      <div className="flex gap-3 flex-wrap">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
      <br />
      <h2 className="font-medium">Icon</h2>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline">
          <PlusIcon /> New Branch
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <PlusIcon />
        </Button>
      </div>
      <br />
      <h2 className="font-medium">Spinner</h2>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" disabled>
          <Spinner data-icon="inline-start" />
          Generating
        </Button>
        <Button variant="secondary" disabled>
          Downloading
          <Spinner data-icon="inline-start" />
        </Button>
      </div>
    </section>
  );
}

function InputSection() {
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

const accordionItems = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
];

function AccordionSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-lg"
      >
        {accordionItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <br />
      <h2 className="font-medium">Multiple</h2>
      <Accordion
        type="multiple"
        className="max-w-lg"
        defaultValue={["item-1", "item-2"]}
      >
        {accordionItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <br />
      <h2 className="font-medium">Disabled</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I access my account history?</AccordionTrigger>
          <AccordionContent>
            Yes, you can view your complete account history including all
            transactions, plan changes, and support tickets in the Account
            History section of your dashboard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Premium feature information</AccordionTrigger>
          <AccordionContent>
            This section contains information about premium features. Upgrade
            your plan to access this content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I update my email address?</AccordionTrigger>
          <AccordionContent>
            You can update your email address in your account settings.
            You&apos;ll receive a verification email at your new address to
            confirm the change.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function AlertSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic </h2>
      <Alert className="max-w-md">
        <PlusIcon />
        <AlertTitle>Account updated successfully</AlertTitle>
        <AlertDescription>
          Your profile information has been saved. Changes will be reflected
          immediately.
        </AlertDescription>
      </Alert>
      <br />
      <h2 className="font-medium">Destructive</h2>
      <Alert variant="destructive" className="max-w-md">
        <PlusIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Your payment could not be processed. Please check your payment method
          and try again.
        </AlertDescription>
      </Alert>
    </section>
  );
}

function AlertDialogSection() {
  return (
    <section className="flex gap-4">
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Basic</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Small</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to allow the USB accessory to connect to this
                device?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
              <AlertDialogAction>Allow</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">With Media</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogMedia>
                <PlusIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Share this project?</AlertDialogTitle>
              <AlertDialogDescription>
                Anyone with the link will be able to view and edit this project.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Share</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Small with Media</Button>
          </AlertDialogTrigger>

          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia>
                <PlusIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to allow the USB accessory to connect to this
                device?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
              <AlertDialogAction>Allow</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Destructive</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                <PlusIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Delete chat?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete this chat conversation. View{" "}
                <a href="#">Settings</a> delete any memories saved during this
                chat.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}

function AvatarSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Basic </h2>
      <div>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <br />
      <h2 className="font-medium">Avatar Badge</h2>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
      <br />
      <h2>Badge with Icon</h2>
      <Avatar className="grayscale">
        <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </Avatar>
      <br />
      <h2 className="font-medium">Avatar Group</h2>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <br />
      <h2 className="font-medium">Avatar Group with Count</h2>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <br />
      <h2 className="font-medium">Avatar Group with Icon</h2>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <PlusIcon />
        </AvatarGroupCount>
      </AvatarGroup>
      <br />
      <h2 className="font-medium">Avatar Sizes</h2>
      <div className="flex flex-wrap items-center gap-2 grayscale">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <br />
      <h2 className="font-medium">Dropdown</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

function BadgeSection() {
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

const BreadcrumbDot = () => (
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
    <circle cx="12.1" cy="12.1" r="1" />
  </svg>
);

function BreadcrumbSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-medium">Basic</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <br />
      <h2 className="font-medium">Custom Separator</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BreadcrumbDot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BreadcrumbDot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <br />
      <h2 className="font-medium">With Dropdown</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BreadcrumbDot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1">
                  Components
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
                    className="size-3.5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BreadcrumbDot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <br />
      <h2 className="font-medium">Collapsed</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <br />
      <h2 className="font-medium">Link</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}

function CardSection() {
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

function TabsSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <Tabs defaultValue="overview" className="w-full max-w-lg">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-sm text-muted-foreground">
          Team workspace status is healthy. 12 projects and 4 active deployments.
        </TabsContent>
        <TabsContent value="activity" className="text-sm text-muted-foreground">
          Last 24h: 18 commits, 6 pull requests, and 2 releases.
        </TabsContent>
        <TabsContent value="settings" className="text-sm text-muted-foreground">
          Notifications enabled. Audit logging set to 90-day retention.
        </TabsContent>
      </Tabs>

      <br />
      <h2 className="font-medium">Line</h2>
      <Tabs defaultValue="overview" className="w-full max-w-lg">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>

      <br />
      <h2 className="font-medium">Vertical</h2>
      <Tabs
        defaultValue="account"
        orientation="vertical"
        className="w-full max-w-lg"
      >
        <TabsList variant="line">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-sm text-muted-foreground">
          Manage your account profile and workspace identity settings.
        </TabsContent>
        <TabsContent value="password" className="text-sm text-muted-foreground">
          Update password, session controls, and security preferences.
        </TabsContent>
        <TabsContent
          value="notifications"
          className="text-sm text-muted-foreground"
        >
          Configure email and in-app notifications for your team.
        </TabsContent>
      </Tabs>

      <br />
      <h2 className="font-medium">Disabled</h2>
      <Tabs defaultValue="home" className="w-full max-w-lg">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <br />
      <h2 className="font-medium">Icons</h2>
      <Tabs defaultValue="preview" className="w-full max-w-lg">
        <TabsList>
          <TabsTrigger value="preview">
            <AppWindowIcon />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon />
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="text-sm text-muted-foreground">
          Live preview of UI output with your theme and spacing scale.
        </TabsContent>
        <TabsContent value="code" className="text-sm text-muted-foreground">
          Source-ready snippets for implementation.
        </TabsContent>
      </Tabs>
    </section>
  );
}

function DialogSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <br />
      <h2 className="font-medium">With Form</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name</Label>
              <Input defaultValue="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Username</Label>
              <Input defaultValue="@johndoe" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <br />
      <h2 className="font-medium">Scrollable Content</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Terms of Service</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Please read our terms carefully before continuing.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline">Decline</Button>
            <Button>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <br />
      <h2 className="font-medium">No Close Button</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Confirm Action</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Confirm your action</DialogTitle>
            <DialogDescription>
              You must choose an option to continue.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Go Back</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function SelectSection() {
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

function SwitchSection() {
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

function TooltipSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-medium">Basic</h2>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>

      <br />
      <h2 className="font-medium">Sides</h2>
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Bottom
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <br />
      <h2 className="font-medium">Icon Buttons</h2>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Add item">
              <PlusIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add item</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Info">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>More information</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Settings">
              <SettingsIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Delete"
              className="text-destructive"
            >
              <TrashIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete item</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <br />
      <h2 className="font-medium">With Delay</h2>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="outline">500ms delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 500ms delay</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
}

function CheckboxSection() {
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
  {
    id: "card",
    title: "Card",
    description:
      "Displays content and actions in a bordered container with an optional header and footer.",
    Component: CardSection,
  },
  {
    id: "tabs",
    title: "Tabs",
    description:
      "Organizes related content into separate views where only one panel is visible at a time.",
    Component: TabsSection,
  },
  {
    id: "dialog",
    title: "Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    Component: DialogSection,
  },
  {
    id: "select",
    title: "Select",
    description:
      "Displays a list of options for the user to pick from, triggered by a button.",
    Component: SelectSection,
  },
  {
    id: "switch",
    title: "Switch",
    description:
      "A toggle control that allows the user to switch between two states like on and off.",
    Component: SwitchSection,
  },
  {
    id: "tooltip",
    title: "Tooltip",
    description:
      "A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.",
    Component: TooltipSection,
  },
  {
    id: "checkbox",
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and unchecked states.",
    Component: CheckboxSection,
  },
];

export default function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="flex h-screen">
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
