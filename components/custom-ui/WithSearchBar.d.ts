import React from "react";
interface WithSearchProps {
    children?: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}
export declare const WithSearchBar: React.FC<WithSearchProps>;
export {};
