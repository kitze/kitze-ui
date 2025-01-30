import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, } from "../ui/Tooltip";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { cn } from "../../cn";
export const SimpleTooltip = ({ children, content, className, tooltipClassName, }) => {
    if (!content) {
        return children;
    }
    return (_jsx(TooltipProvider, { delayDuration: 0, children: _jsxs(TooltipRoot, { children: [_jsx(TooltipTrigger, { asChild: true, className: className, children: children }), _jsx(TooltipPortal, { children: _jsx(TooltipContent, { className: cn("max-w-[200px]", tooltipClassName), children: content }) })] }) }));
};
