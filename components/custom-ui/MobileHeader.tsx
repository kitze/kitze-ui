import React, { ReactNode, useState } from "react";
import { CustomVaul } from "./CustomVaul";
import { HiMenu } from "react-icons/hi";
import { cn } from "../../cn";
import { useMeasureElement, useScrolledPast } from "@kitze/utils";
import { ReactFC } from "../../types";

export interface MobileHeaderClassNames {
  root?: string;
  container?: string;
  leftSide?: string;
  middle?: string;
  rightSide?: string;
  menuButton?: string;
}

export interface MobileHeaderProps {
  leftSide?: ReactNode;
  middle?: ReactNode;
  drawerContent?: ReactNode;
  classNames?: MobileHeaderClassNames;
}

export const MobileHeader: ReactFC<MobileHeaderProps> = ({
  leftSide,
  middle,
  drawerContent,
  classNames,
}) => {
  const [headerRef, { height: headerHeight }] = useMeasureElement();
  const isScrolled = useScrolledPast(headerHeight);
  const [isOpen, setIsOpen] = useState(false);

  const trigger = (
    <button
      className={cn(
        "p-2 text-gray-600 hover:text-gray-900 transition-colors",
        classNames?.menuButton
      )}
      aria-label="Menu"
    >
      <HiMenu className="w-6 h-6" />
    </button>
  );

  return (
    <div
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 h",
        "bg-white/80 backdrop-blur-xl transition-all duration-200",
        isScrolled && "shadow-sm",
        classNames?.root
      )}
    >
      <div
        className={cn(
          "h center justify-between w-full px-4 py-3",
          classNames?.container
        )}
      >
        <div className={cn("flex-1", classNames?.leftSide)}>{leftSide}</div>

        {middle && (
          <div className={cn("flex-1 text-center", classNames?.middle)}>
            {middle}
          </div>
        )}

        <div className={cn("flex-1 flex justify-end", classNames?.rightSide)}>
          <CustomVaul open={isOpen} onOpenChange={setIsOpen} trigger={trigger}>
            {drawerContent}
          </CustomVaul>
        </div>
      </div>
    </div>
  );
};
