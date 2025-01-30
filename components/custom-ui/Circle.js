import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../cn";
const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
};
const colorClasses = {
    primary: "bg-blue-500",
    secondary: "bg-purple-500",
    success: "bg-green-500",
};
export const Circle = ({ size = "md", color = "primary", className, children, }) => {
    return (_jsx("div", { className: cn("rounded-full flex items-center justify-center", sizeClasses[size], colorClasses[color], className), children: children }));
};
