import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { PlusIcon, InfoIcon, SettingsIcon, TrashIcon } from "lucide-react";

export default function TooltipSection() {
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
