"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn } from "@/cn";
import { JSX, memo, useState } from "react";
import { KanbanColumnConfig, KanbanColumnId } from "./types";
import { KanbanItem } from "./KanbanItem";
import {
  TbPlus as IconPlus,
  TbChevronLeft as IconChevronLeft,
} from "react-icons/tb";
import { usePersistableState } from "@/hooks/usePersistableState";
import { HelpTooltipIcon } from "../HelpTooltipIcon";
import { ActionIcon } from "../ActionIcon";

type KanbanColumnProps<T extends KanbanColumnId> = {
  config: KanbanColumnConfig<T>;
  items: any[];
  renderItem: (
    item: any,
    setDraggable: (isDraggable: boolean) => void
  ) => React.ReactNode;
  onAddNew?: () => void;
  isOver?: boolean;
  kanbanId: T;
};

export const KanbanColumn = memo(
  <T extends KanbanColumnId>({
    config,
    items,
    renderItem,
    onAddNew,
    isOver,
    kanbanId,
  }: KanbanColumnProps<T>) => {
    const { setNodeRef } = useDroppable({
      id: config.id,
    });
    const [isCollapsed, setIsCollapsed] = usePersistableState<boolean>(
      `${kanbanId}_column_${config.id}_collapsed`,
      false
    );
    const [itemDraggableStates, setItemDraggableStates] = useState<
      Record<string, boolean>
    >({});

    const { color = "zinc-500" } = config;

    const setItemDraggable = (itemId: string, isDraggable: boolean) => {
      setItemDraggableStates((prev) => ({
        ...prev,
        [itemId]: isDraggable,
      }));
    };

    return (
      <div
        className={cn(
          "vertical space-y-4 first:pl-6 last:pr-6 select-none transition-all duration-200",
          isCollapsed
            ? "w-12 !p-0 !ml-0 !-mr-6"
            : "min-w-[85vw] md:min-w-[300px] w-[85vw] md:w-[300px]"
        )}
        style={{ ["--column-color" as string]: `var(--color-${color})` }}
      >
        <div
          className={cn(
            "horizontal cursor-pointer items-center",
            isCollapsed
              ? "flex-col space-y-2 rotate-90 translate-y-4 align-top justify-start items-start"
              : "justify-between"
          )}
        >
          <div
            onClick={() => {
              if (isCollapsed) {
                setIsCollapsed(false);
              }
            }}
            className={cn("horizontal items-center space-x-2")}
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full ring-2 transition-colors duration-200",
                color
                  ? "bg-(--column-color) ring-(--column-color)/30"
                  : config.classNames?.circle
              )}
            />
            <h2 className="font-medium whitespace-nowrap">{config.title}</h2>
            {config.tooltip && (
              <HelpTooltipIcon tooltip={config.tooltip as string} size={14} />
            )}
            {!isCollapsed && (
              <div className="text-sm text-zinc-400">({items.length})</div>
            )}
          </div>

          <div className="horizontal space-x-2">
            {!isCollapsed && (
              <ActionIcon
                variant="ghost"
                onClick={() => setIsCollapsed((prev) => !prev)}
                Icon={IconChevronLeft}
                classNames={{
                  icon: cn("transition-transform", isCollapsed && "rotate-180"),
                }}
              />
            )}
            {!isCollapsed && onAddNew && (
              <ActionIcon variant="ghost" onClick={onAddNew} Icon={IconPlus} />
            )}
          </div>
        </div>

        {!isCollapsed && (
          <div
            ref={setNodeRef}
            className={cn(
              "vertical space-y-3 p-4 rounded-lg h-full overflow-y-auto transition-colors duration-200",
              color
                ? cn(
                    "bg-(--column-color)/10 ring-2 ring-(--column-color)/15",
                    isOver && "bg-(--column-color)/20 ring-(--column-color)/30"
                  )
                : cn(
                    config.classNames?.card,
                    isOver && config.classNames?.cardWhenOver
                  )
            )}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => (
                <KanbanItem key={item.id} id={item.id}>
                  {renderItem(item, (isDraggable) =>
                    setItemDraggable(item.id, isDraggable)
                  )}
                </KanbanItem>
              ))}
            </SortableContext>
          </div>
        )}
      </div>
    );
  }
) as <T extends KanbanColumnId>(props: KanbanColumnProps<T>) => JSX.Element;
