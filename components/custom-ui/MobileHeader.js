import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CustomVaul } from "./CustomVaul";
import { HiMenu } from "react-icons/hi";
import { cn } from "../../cn";
import { useMeasureElement, useScrolledPast } from "@kitze/utils";
export const MobileHeader = ({ leftSide, middle, drawerContent, classNames, }) => {
    const [headerRef, { height: headerHeight }] = useMeasureElement();
    const isScrolled = useScrolledPast(headerHeight);
    const [isOpen, setIsOpen] = useState(false);
    const trigger = (_jsx("button", { className: cn("p-2 text-gray-600 hover:text-gray-900 transition-colors", classNames?.menuButton), "aria-label": "Menu", children: _jsx(HiMenu, { className: "w-6 h-6" }) }));
    return (_jsx("div", { ref: headerRef, className: cn("fixed top-0 left-0 right-0 w-full z-50 h", "bg-white/80 backdrop-blur-xl transition-all duration-200", isScrolled && "shadow-sm", classNames?.root), children: _jsxs("div", { className: cn("h center justify-between w-full px-4 py-3", classNames?.container), children: [_jsx("div", { className: cn("flex-1", classNames?.leftSide), children: leftSide }), middle && (_jsx("div", { className: cn("flex-1 text-center", classNames?.middle), children: middle })), _jsx("div", { className: cn("flex-1 flex justify-end", classNames?.rightSide), children: _jsx(CustomVaul, { open: isOpen, onOpenChange: setIsOpen, trigger: trigger, children: drawerContent }) })] }) }));
};
