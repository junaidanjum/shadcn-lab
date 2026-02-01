import { PlusIcon } from "../sections/icons";
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
import { Button } from "@/components/ui/button";

export default function AlertDialogSection() {
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
