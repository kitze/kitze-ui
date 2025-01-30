import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { SimpleTooltip } from "./SimpleTooltip";
export const ConditionalTooltip = ({ condition, content, children, classNames = {}, }) => {
    if (!condition || !content) {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsx(SimpleTooltip, { content: content, className: classNames.wrapper, tooltipClassName: classNames.tooltip, children: children }));
};
