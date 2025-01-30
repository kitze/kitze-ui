import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../cn";
export const Pill = ({ label, isSelected, onClick, icon: Icon, classNames = {}, }) => {
    return (_jsxs("div", { onClick: onClick, className: cn("inline-flex cursor-pointer select-none items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all", {
            "bg-violet-100 text-violet-800 hover:bg-violet-200 ring-2 ring-violet-200": isSelected,
            "bg-gray-100 text-gray-600 hover:bg-gray-200": !isSelected,
        }, classNames.wrapper), children: [Icon && (_jsx(Icon, { className: cn("w-4 h-4", {
                    "text-violet-600": isSelected,
                    "text-gray-500": !isSelected,
                }, classNames.icon) })), _jsx("span", { className: cn(classNames.text), children: label })] }));
};
