/* Just a reexport from the Button component with some type aliases */
import { Button } from "@/components/ui/Button/Button";
import {
  ButtonProps,
  ButtonClassNames,
} from "@/components/ui/Button/Button.types";

export type CustomButtonProps = ButtonProps;
type CustomButtonClassNames = ButtonClassNames;

export const CustomButton = Button;

export type { CustomButtonClassNames };
