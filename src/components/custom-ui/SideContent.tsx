import { IconType } from "react-icons";
import { ReactNode } from "react";
import { cn } from "@/cn";
import { ReactFC, Size } from "../../types";
import { Spinner } from "../ui/Spinner";

const sizeStyles: Record<Size, { iconSize: string }> = {
  xs: { iconSize: "w-3" },
  sm: { iconSize: "w-3.5" },
  md: { iconSize: "w-4" },
  lg: { iconSize: "w-5" },
  xl: { iconSize: "w-6" },
};

interface SideContentProps {
  Icon?: IconType;
  content?: ReactNode;
  loading?: boolean;
  showSpinner?: boolean;
  className?: string;
  iconClassName?: string;
  size: Size;
}

export const SideContent: ReactFC<SideContentProps> = ({
  Icon,
  content,
  loading,
  showSpinner,
  className,
  iconClassName,
  size,
}) => {
  if (!Icon && !content && !showSpinner) return null;

  return (
    <div className={cn("flex items-center", className)}>
      {showSpinner ? (
        <Spinner />
      ) : Icon ? (
        <Icon className={cn(sizeStyles[size].iconSize, iconClassName)} />
      ) : (
        content
      )}
    </div>
  );
};
