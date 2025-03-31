import { ReactFC, Size } from "../../../types";
import { IconType } from "react-icons";
import { LinkableProps } from "../../../hooks/useLinkableComponent";

export interface ButtonClassNames {
  root?: string;
  icon?: string;
  leftSide?: string;
  rightSide?: string;
  tooltip?: string;
}

export type ButtonColor = "primary" | "secondary" | "destructive";

export interface ButtonProps extends LinkableProps {
  as?: React.ElementType;
  ref?: React.Ref<any>;
  variant?: "default" | "outline" | "ghost";
  circle?: boolean;
  color?: ButtonColor;
  textColor?: string;
  size?: Size;
  isIconButton?: boolean;
  icon?: IconType;
  iconSize?: number;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  loading?: boolean;
  classNames?: ButtonClassNames;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  tooltip?: string;
  onClick?: (e: any) => void;
}
