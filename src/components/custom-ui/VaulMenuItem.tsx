import { cn } from "@/cn";
import { ConditionalWrap } from "../random/ConditionalWrap";
import Link from "next/link";
import { useVaul } from "./VaulContext";
import { IconType } from "react-icons";
import { ReactFC } from "@/types";

export interface VaulMenuItemClassNames {
  root?: string;
  icon?: string;
  title?: string;
}

export interface VaulMenuItemProps {
  href?: string;
  icon?: IconType;
  title: string;
  onClick?: () => void;
  iconColorClass?: string;
  classNames?: VaulMenuItemClassNames;
  closeOnClick?: boolean;
}

export const VaulMenuItem: ReactFC<VaulMenuItemProps> = ({
  href,
  icon: Icon,
  title,
  onClick,
  iconColorClass,
  classNames = {},
  closeOnClick,
}) => {
  const vaulContext = useVaul();

  const handleClick = () => {
    if (closeOnClick) {
      vaulContext.close();
    }
    onClick?.();
  };

  const content = (
    <div
      className={cn(
        "h gap-4 p-4",
        "text-foreground",
        "active:bg-muted",
        "touch-manipulation",
        classNames.root
      )}
      onClick={handleClick}
    >
      {Icon && (
        <div
          className={cn(
            "text-xl text-muted-foreground",
            iconColorClass,
            classNames.icon
          )}
        >
          <Icon className="size-5" />
        </div>
      )}
      <span
        className={cn("text-lg font-medium text-foreground", classNames.title)}
      >
        {title}
      </span>
    </div>
  );

  return (
    <ConditionalWrap
      condition={!!href}
      wrap={(children) => <Link href={href!}>{children}</Link>}
    >
      {content}
    </ConditionalWrap>
  );
};
