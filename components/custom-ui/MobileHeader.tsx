import { ReactElement, ReactNode, useState } from "react";
import { CustomVaul } from "./CustomVaul";
import { HiMenu } from "react-icons/hi";
import { cn } from "../../cn";
import { useMeasureElement, useScrolledPast } from "@kitze/utils";
import { ReactFC } from "../../types";
import { ActionIcon } from "./ActionIcon";

export interface MobileHeaderClassNames {
  root?: string;
  container?: string;
  leftSide?: string;
  middle?: string;
  rightSide?: string;
  menuButton?: string;
}

export interface MobileHeaderProps {
  leftSide?: ReactElement;
  middle?: ReactNode;
  drawerContent?: ReactNode;
  classNames?: MobileHeaderClassNames;
  renderRightSide?: (props: {
    menuButton: ReactNode;
    menuTrigger: (children: ReactNode) => ReactNode;
  }) => ReactNode;
}

export const MobileHeader: ReactFC<MobileHeaderProps> = ({
  leftSide,
  middle,
  drawerContent,
  classNames,
  renderRightSide,
}) => {
  const [headerRef, { height: headerHeight }] = useMeasureElement();
  const isScrolled = useScrolledPast(headerHeight);
  const [isOpen, setIsOpen] = useState(false);

  const menuButton = (
    <ActionIcon
      Icon={HiMenu}
      className={cn("md:hidden", classNames?.menuButton)}
      aria-label="Menu"
      iconSize={24}
    />
  );

  const menuTrigger = (children: ReactNode) => (
    <CustomVaul open={isOpen} onOpenChange={setIsOpen} trigger={menuButton}>
      {children}
    </CustomVaul>
  );

  return (
    <div
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 w-full max-w-[1200px] mx-auto z-50 h",
        "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl transition-all duration-200",
        "text-gray-900 dark:text-gray-100",
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
          {renderRightSide
            ? renderRightSide({ menuButton, menuTrigger })
            : menuTrigger(drawerContent)}
        </div>
      </div>
    </div>
  );
};
