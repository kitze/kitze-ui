"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactFC } from "@/types";
import { cn } from "@/cn";

export const KanbanItem: ReactFC<{ id: string }> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "!cursor-grab active:!cursor-grabbing touch-none transition-all duration-200",
        isDragging && "opacity-0"
      )}
    >
      {children}
    </div>
  );
};
