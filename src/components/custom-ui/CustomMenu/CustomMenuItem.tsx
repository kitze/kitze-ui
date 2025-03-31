import { ReactFC } from "@/types";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  useLinkableComponent,
  LinkableProps,
} from "../../../hooks/useLinkableComponent";
import { useKitzeUI } from "@/context/KitzeUIContext";
import { VaulMenuItem } from "../VaulMenuItem";
import { useCustomMenu } from "./CustomMenuContext";
import { useBaseMenuItem, BaseMenuItemProps } from "../MenuItem/BaseMenuItem";

export type CustomMenuItemProps = LinkableProps & BaseMenuItemProps;

export const CustomMenuItem: ReactFC<CustomMenuItemProps> = ({
  href,
  external,
  ...props
}) => {
  const { isMobile } = useKitzeUI();
  const { responsive } = useCustomMenu();
  const {
    Component,
    href: linkHref,
    linkProps,
  } = useLinkableComponent({
    href,
    external,
  });

  // If we're on mobile and responsive is enabled, use VaulMenuItem
  if (isMobile && responsive) {
    return (
      <VaulMenuItem
        href={href}
        icon={props.icon as any}
        title={props.children as string}
        onClick={props.onClick}
        inlineConfirm={props.inlineConfirm}
        closeOnClick
        classNames={{
          root: props.className,
          icon: props.iconClassName,
        }}
      />
    );
  }

  const { itemProps, renderContent } = useBaseMenuItem(props);

  const MenuItem = (
    <DropdownMenuPrimitive.Item {...itemProps}>
      {renderContent()}
    </DropdownMenuPrimitive.Item>
  );

  if (Component) {
    return (
      <Component href={linkHref} {...linkProps}>
        {MenuItem}
      </Component>
    );
  }

  return MenuItem;
};
