import { Pill, PillProps } from "./Pill";
import { ReactFC } from "../../types";
import { cn } from "@/cn";

export interface PillsClassNames {
  wrapper?: string;
}

export interface PillsProps {
  selectedId: string;
  items: Array<{ id: string; title: string }>;
  onSelect: (id: string) => void;
  includeAll?: boolean;
  allLabel?: string;
  classNames?: PillsClassNames;
  pillProps?: Partial<PillProps>;
}

export const Pills: ReactFC<PillsProps> = ({
  selectedId,
  items = [],
  onSelect,
  includeAll = true,
  allLabel = "All",
  classNames = {},
  pillProps = {},
}) => {
  return (
    <div className={cn("horizontal flex-wrap gap-2", classNames.wrapper)}>
      {includeAll && (
        <Pill
          label={allLabel}
          isSelected={selectedId === "all"}
          onClick={() => onSelect("all")}
          {...pillProps}
        />
      )}
      {items?.map((item) => (
        <Pill
          key={item.id}
          label={item.title}
          isSelected={selectedId === item.id}
          onClick={() => onSelect(item.id)}
          {...pillProps}
        />
      ))}
    </div>
  );
};
