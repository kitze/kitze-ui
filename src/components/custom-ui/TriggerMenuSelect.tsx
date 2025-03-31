import { CustomButton } from "./CustomButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ReactFC } from "@/types";
import { cn } from "@/cn";

export interface TriggerMenuSelectProps {
  label: string;
  className?: string;
}

export const TriggerMenuSelect: ReactFC<TriggerMenuSelectProps> = ({
  label,
  className,
}) => {
  return (
    <CustomButton
      className={cn(
        "w-full justify-between bg-foreground/5 dark:bg-foreground/10 hover:bg-foreground/10 dark:hover:bg-foreground/20 text-foreground",
        className
      )}
      rightSide={
        <div className="vertical -space-y-1">
          <FiChevronUp className="size-3" />
          <FiChevronDown className="size-3" />
        </div>
      }
    >
      {label}
    </CustomButton>
  );
};
