import { ClassValue } from "clsx";
/**
 * Combines multiple class names or conditional class names and merges Tailwind CSS classes efficiently
 * @param classes - Array of class names, objects, or falsy values
 * @returns Merged and deduplicated className string
 * @example
 * cn('px-2', 'py-1', { 'bg-red-500': isError })
 * // Returns: "px-2 py-1 bg-red-500" (if isError is true)
 */
export declare function cn(...classes: ClassValue[]): string;
