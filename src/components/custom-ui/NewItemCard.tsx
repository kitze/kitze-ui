import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { TbCircleDashedPlus } from "react-icons/tb";
import { Spinner } from "../ui/Spinner";

export interface NewItemCardProps {
  onClick: () => void;
  title?: string;
  loading?: boolean;
  layout?: "vertical" | "horizontal";
  classNames?: {
    root?: string;
    icon?: string;
    title?: string;
    iconWrapper?: string;
  };
}

export const NewItemCard: ReactFC<NewItemCardProps> = ({
  onClick,
  title = "Create new",
  loading,
  layout = "vertical",
  classNames,
}) => {
  const IconOrSpinner = () => (
    <div
      className={cn(
        "min-h-[32px] min-w-[32px] flex items-center justify-center",
        classNames?.iconWrapper
      )}
    >
      {loading ? (
        <Spinner size="lg" className={classNames?.icon} />
      ) : (
        <TbCircleDashedPlus
          className={cn(
            "size-8 stroke-1 stroke-foreground/80 group-hover:opacity-70",
            classNames?.icon
          )}
        />
      )}
    </div>
  );

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={cn(
        "group cursor-pointer p-3 rounded-lg border-2 border-dashed border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 transition-colors",
        loading && "opacity-50",
        layout === "vertical"
          ? "vertical center"
          : "horizontal items-center space-x-3 min-h-[48px]",
        classNames?.root
      )}
    >
      <IconOrSpinner />
      <span
        className={cn(
          "text-sm font-medium text-foreground/50",
          classNames?.title
        )}
      >
        {title}
      </span>
    </button>
  );
};
