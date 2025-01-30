import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../cn";
import { HiCheck } from "react-icons/hi";
export const Checkbox = ({ checked, onChange, label, id, className, disabled = false, }) => {
    return (_jsxs("div", { className: cn("flex items-center gap-2", className), children: [_jsxs("div", { className: "relative flex items-center", children: [_jsx("input", { type: "checkbox", id: id, checked: checked, onChange: (e) => onChange(e.target.checked), disabled: disabled, className: cn("h-5 w-5 rounded border-gray-300 cursor-pointer", "text-violet-600 focus:ring-violet-500", "transition-colors duration-200", disabled && "cursor-not-allowed opacity-50") }), _jsx(HiCheck, { className: cn("absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none", "transition-opacity duration-200", checked ? "opacity-100" : "opacity-0") })] }), label && (_jsx("label", { htmlFor: id, className: cn("text-sm text-gray-700 select-none", disabled && "cursor-not-allowed opacity-50", !disabled && "cursor-pointer"), children: label }))] }));
};
