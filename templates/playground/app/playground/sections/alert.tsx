import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PlusIcon } from "../sections/icons";

export default function AlertSection() {
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
