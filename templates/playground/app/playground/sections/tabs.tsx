import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindowIcon, CodeIcon } from "lucide-react";

export default function TabsSection() {
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
      <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-lg">
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
        <TabsContent value="notifications" className="text-sm text-muted-foreground">
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
