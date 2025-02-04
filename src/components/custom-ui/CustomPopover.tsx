import { ReactFC } from "@/types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { cn } from "@/cn";

export type CustomPopoverProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  classNames?: {
    content?: string;
    trigger?: string;
  };
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export const CustomPopover: ReactFC<CustomPopoverProps> = ({
  trigger,
  content,
  classNames = {},
  align = "center",
  sideOffset = 4,
}) => {
  return (
    <Popover>
      <PopoverTrigger className={classNames.trigger}>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("w-auto min-w-[200px]", classNames.content)}
        align={align}
        sideOffset={sideOffset}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
