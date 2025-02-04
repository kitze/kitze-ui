import { ReactNode, useState } from "react";
import { CustomVaul } from "./CustomVaul";
import { HiMenu } from "react-icons/hi";
import { cn } from "@/cn";
import { useScrolledPast } from "@kitze/utils";
import { ReactFC } from "../../types";
import { ActionIcon } from "./ActionIcon";

export interface MobileHeaderClassNames {
  root?: string;
  container?: string;
  leftSide?: string;
  middle?: string;
  rightSide?: string;
  menuButton?: string;
  pastScrolled?: string;
}

export interface MobileHeaderProps {
  leftSide?: ReactNode;
  middle?: ReactNode;
  drawerContent?: ReactNode;
  classNames?: MobileHeaderClassNames;
  height?: number;
  renderRightSide?: (props: {
    menuButton: ReactNode;
    drawerContent: ReactNode;
    menuTrigger: (children: ReactNode) => ReactNode;
  }) => ReactNode;
}

export const MobileHeader: ReactFC<MobileHeaderProps> = ({
  leftSide,
  middle,
  drawerContent,
  classNames,
  renderRightSide,
  height = 80,
}) => {
  const isScrolled = useScrolledPast(height);
  const [isOpen, setIsOpen] = useState(false);

  const menuButton = (
    <ActionIcon
      variant="ghost"
      Icon={HiMenu}
      className={cn("md:hidden", classNames?.menuButton)}
      aria-label="Menu"
      iconSize={20}
    />
  );

  const menuTrigger = (children: ReactNode) => (
    <CustomVaul open={isOpen} onOpenChange={setIsOpen} trigger={menuButton}>
      {children}
    </CustomVaul>
  );

  return (
    <div
      style={{
        height: height,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-30 vertical center",
        "backdrop-blur-xl transition-all duration-200",
        "text-foreground/80 ",
        isScrolled &&
          cn("shadow-sm dark:bg-background/80", classNames?.pastScrolled),
        classNames?.root
      )}
    >
      <div
        className={cn(
          "h max-w-[1200px] center justify-between w-full px-4 py-3",
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
            ? renderRightSide({ menuButton, drawerContent, menuTrigger })
            : menuTrigger(drawerContent)}
        </div>
      </div>
    </div>
  );
};
