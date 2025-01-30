import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pill } from "./Pill";
import { cn } from "../../cn";
export const Pills = ({ selectedId, items = [], onSelect, includeAll = true, allLabel = "All", classNames = {}, pillProps = {}, }) => {
    return (_jsxs("div", { className: cn("horizontal flex-wrap gap-2", classNames.wrapper), children: [includeAll && (_jsx(Pill, { label: allLabel, isSelected: selectedId === "all", onClick: () => onSelect("all"), ...pillProps })), items?.map((item) => (_jsx(Pill, { label: item.title, isSelected: selectedId === item.id, onClick: () => onSelect(item.id), ...pillProps }, item.id)))] }));
};
