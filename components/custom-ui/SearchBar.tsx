import { useRef } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { ReactFC } from "../../types";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  onForceClose?: () => void;
}

export const SearchBar: ReactFC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  autoFocus,
  onClose,
  onForceClose,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const iconSize = isMobile ? 24 : 20;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange("");
    onForceClose?.();
    inputRef.current?.blur();
  };

  return (
    <div className="relative flex items-center w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onClose?.()}
        className="w-full px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        autoFocus={autoFocus}
      />
      <HiSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={iconSize}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 
            hover:text-gray-600 transition-colors"
        >
          <HiX size={iconSize} />
        </button>
      )}
    </div>
  );
};
