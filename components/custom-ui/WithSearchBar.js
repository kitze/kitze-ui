import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { HiSearch } from "react-icons/hi";
export const WithSearchBar = ({ children, value, onChange, placeholder, }) => {
    const [isSearching, setIsSearching] = useState(false);
    const handleClose = () => {
        if (!value) {
            setIsSearching(false);
        }
    };
    const handleForceClose = () => {
        setIsSearching(false);
    };
    return (_jsx("div", { className: "relative", children: _jsx(AnimatePresence, { mode: "wait", children: isSearching ? (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.2 }, className: "w-full sm:w-auto", children: _jsx(SearchBar, { value: value, onChange: onChange, placeholder: placeholder, onClose: handleClose, onForceClose: handleForceClose, autoFocus: true }) }, "search")) : (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 }, transition: { duration: 0.2 }, className: "flex items-center justify-between w-full", children: [children, _jsx("div", { className: "flex items-center gap-2", children: _jsx("button", { onClick: () => setIsSearching(true), className: "p-2 text-gray-400 hover:text-gray-600 transition-colors", children: _jsx(HiSearch, { className: "w-5 h-5" }) }) })] }, "content")) }) }));
};
