import React, { ElementRef, ComponentPropsWithoutRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & React.RefAttributes<ElementRef<typeof TooltipPrimitive.Content>>>;
export { TooltipRoot, TooltipTrigger, TooltipContent, TooltipProvider };
