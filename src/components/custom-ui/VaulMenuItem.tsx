import React from "react";
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
        "flex items-center gap-4 px-4 py-4",
        "text-gray-700 dark:text-gray-100",
        "active:bg-gray-100 dark:active:bg-gray-800",
        "border-b border-gray-100 dark:border-gray-800",
        "touch-manipulation",
        classNames.root
      )}
      onClick={handleClick}
    >
      {Icon && (
        <div
          className={cn(
            "text-xl text-gray-600 dark:text-gray-300",
            iconColorClass,
            classNames.icon
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <span
        className={cn(
          "text-lg font-medium text-gray-700 dark:text-gray-100",
          classNames.title
        )}
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
