import { Size } from "../../../types";
import { SpinnerProps } from "../Spinner";

export const sizeStyles: Record<
  Size,
  { padding: string; gap: string; iconSize?: number }
> = {
  xs: { padding: "px-2 py-0.5", gap: "gap-1", iconSize: 14 },
  sm: { padding: "px-2.5 py-1", gap: "gap-1", iconSize: 16 },
  md: { padding: "px-3 py-1.5", gap: "gap-1.5", iconSize: 18 },
  lg: { padding: "px-4 py-2", gap: "gap-2", iconSize: 20 },
  xl: { padding: "px-5 py-2.5", gap: "gap-2.5", iconSize: 22 },
};

export const spinnerSizeMap: Record<Size, SpinnerProps["size"]> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg",
};

export const defaultIconSizes: Record<Size, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};
