import { ReactFC } from "../../types";

export interface ButtonProps {
  /** The content of the button */
  children: React.ReactNode;
  /** The variant style of the button */
  variant?: "primary" | "secondary" | "outline";
  /** The size of the button */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export const Button: ReactFC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) => {
  const baseStyles = "rounded-md font-medium transition-colors";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
  ].join(" ");

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
