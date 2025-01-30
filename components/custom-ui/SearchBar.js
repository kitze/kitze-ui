import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { HiSearch, HiX } from "react-icons/hi";
export const SearchBar = ({ value, onChange, placeholder = "Search...", autoFocus, onClose, onForceClose, }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const iconSize = isMobile ? 24 : 20;
    const inputRef = useRef(null);
    const handleClear = () => {
        onChange("");
        onForceClose?.();
        inputRef.current?.blur();
    };
    return (_jsxs("div", { className: "relative flex items-center w-full", children: [_jsx("input", { ref: inputRef, type: "text", placeholder: placeholder, value: value, onChange: (e) => onChange(e.target.value), onBlur: () => onClose?.(), className: "w-full px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg \n          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent", autoFocus: autoFocus }), _jsx(HiSearch, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: iconSize }), value && (_jsx("button", { onClick: handleClear, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 \n            hover:text-gray-600 transition-colors", children: _jsx(HiX, { size: iconSize }) }))] }));
};
