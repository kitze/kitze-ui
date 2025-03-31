import { useRef } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { ReactFC } from "@/types";
import { Input, InputClassNames } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button/Button";

export interface SearchBarClassNames extends InputClassNames {
  clearButton?: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  onForceClose?: () => void;
  className?: string;
  classNames?: SearchBarClassNames;
}

export const SearchBar: ReactFC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  autoFocus,
  onClose,
  onForceClose,
  className,
  classNames = {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange("");
    onForceClose?.();
    inputRef.current?.blur();
  };

  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => onClose?.()}
      autoFocus={autoFocus}
      className={className}
      classNames={classNames}
      leftIcon={HiSearch}
      rightItem={
        value ? (
          <Button
            variant="ghost"
            size="xs"
            circle
            icon={HiX}
            onClick={handleClear}
            className={classNames.clearButton}
          />
        ) : null
      }
    />
  );
};
