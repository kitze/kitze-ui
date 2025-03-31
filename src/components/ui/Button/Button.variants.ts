import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: `inline-flex cursor-pointer active:scale-95 items-center justify-center whitespace-nowrap 
    font-medium transition-all select-none
    focus-visible:outline-outline focus-visible:outline-none focus-visible:outline-1
    disabled:pointer-events-none disabled:opacity-50`,
  variants: {
    variant: {
      default:
        "bg-[var(--button-color)] text-white hover:bg-[var(--button-color)]/90",
      outline:
        "border border-[var(--button-color)] bg-transparent text-[var(--button-color)] hover:bg-[var(--button-color)]/10",
      ghost: "text-[var(--button-color)] hover:bg-[var(--button-color)]/10",
    },
    color: {
      primary: "",
      secondary: "",
      destructive: "",
    },
    size: {
      xs: "h-7 text-xs rounded-md px-2",
      sm: "h-8 text-sm rounded-md px-3",
      md: "h-9 text-sm rounded-md px-4",
      lg: "h-11 text-base rounded-md px-5",
      xl: "h-12 text-lg rounded-md px-6",
    },
    shape: {
      default: "rounded-md",
      circle: "rounded-full aspect-square",
    },
    isIconButton: {
      true: "w-fit p-0",
      false: "w-fit",
    },
  },
  compoundVariants: [
    {
      shape: ["circle", "default"],
      isIconButton: true,
      class: "aspect-square",
    },
    // Primary color variants
    {
      variant: ["outline", "ghost"],
      color: "primary",
      class:
        "text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/40",
    },
    {
      variant: "outline",
      color: "primary",
      class: "border-primary-300 dark:border-primary-700",
    },
    // Secondary color variants
    {
      variant: "default",
      color: "secondary",
      class:
        "bg-foreground/10 text-foreground hover:bg-foreground/20 dark:bg-foreground/10 dark:hover:bg-foreground/20",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "border-foreground/20 text-foreground hover:bg-foreground/10 dark:border-foreground/30",
    },
    {
      variant: "ghost",
      color: "secondary",
      class:
        "text-foreground/80 hover:bg-foreground/10 dark:text-foreground/80",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "default",
    color: "secondary",
  },
});
