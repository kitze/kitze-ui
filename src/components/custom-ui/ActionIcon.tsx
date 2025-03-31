import { IconType } from "react-icons";
import { Button } from "@/components/ui/Button/Button";
import { ButtonProps } from "@/components/ui/Button/Button.types";
import { ReactFC } from "../../types";

export const ActionIcon: ReactFC<
  Omit<ButtonProps, "icon"> & { Icon: IconType }
> = ({ Icon, ...props }) => {
  return <Button {...props} icon={Icon} />;
};
