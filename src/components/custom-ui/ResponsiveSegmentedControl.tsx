import { useKitzeUI } from "../../context/KitzeUIContext";
import { SegmentedControl, SegmentedControlProps } from "./SegmentedControl";
import { VaulMenuItemsProps } from "./VaulMenuItems";
import { ResponsiveSegmentedControlMobile } from "./ResponsiveSegmentedControlMobile";

export interface ResponsiveSegmentedControlProps<T extends string = string>
  extends SegmentedControlProps<T> {
  vaulMenuItemsProps?: Partial<VaulMenuItemsProps>;
  closeOnClick?: boolean;
}

export const ResponsiveSegmentedControl = <T extends string = string>({
  vaulMenuItemsProps,
  closeOnClick = true,
  ...props
}: ResponsiveSegmentedControlProps<T>) => {
  const { isMobile } = useKitzeUI();

  if (isMobile) {
    return (
      <ResponsiveSegmentedControlMobile
        vaulMenuItemsProps={vaulMenuItemsProps}
        closeOnClick={closeOnClick}
        {...props}
      />
    );
  }

  return <SegmentedControl<T> {...props} />;
};
