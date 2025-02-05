"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  pointerWithin,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanProps, KanbanColumnId } from "./types";

export const Kanban = <T extends KanbanColumnId>({
  items,
  config,
  renderItem,
}: KanbanProps<T>) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overColumn, setOverColumn] = useState<T | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const findColumnFromId = (id: string): T | null => {
    // First check if it's a column ID
    const column = config.columns.find((col) => col.id === id);
    if (column) return column.id as T;

    // If not, find the column that contains the item
    const item = items.find((item) => item.id === id);
    if (item) {
      return config.getColumnId(item);
    }
    return null;
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id as string);
  };

  const handleDragOver = ({ over }: DragOverEvent) => {
    if (!over) {
      setOverColumn(null);
      return;
    }

    const columnId = findColumnFromId(over.id as string);
    console.log("Drag over:", {
      overId: over?.id,
      overData: over?.data?.current,
      columnId,
      isColumn: config.columns.some((col) => col.id === over.id),
    });

    setOverColumn(columnId);
  };

  const handleDragEnd = (dragEndEvent: DragEndEvent) => {
    const { active, over } = dragEndEvent;
    console.log("Drag end:", {
      activeId: active.id,
      overId: over?.id,
      overColumn,
    });

    setActiveId(null);
    setOverColumn(null);

    if (!over) return;

    const itemId = active.id as string;
    const targetColumnId = findColumnFromId(over.id as string);

    if (!targetColumnId || itemId === targetColumnId) return;

    config.updateItem(itemId, targetColumnId);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={pointerWithin}
    >
      <div className="h-full w-full overflow-x-auto">
        <div className="h-full inline-flex gap-4 py-4 min-w-max">
          {config.columns.map((column) => (
            <KanbanColumn
              key={column.id}
              config={column}
              items={items.filter(
                (item) => config.getColumnId(item) === column.id
              )}
              renderItem={renderItem}
              kanbanId={column.id}
              isOver={overColumn === column.id}
            />
          ))}
        </div>
      </div>

      <DragOverlay className="cursor-grabbing">
        {activeId && activeItem && renderItem(activeItem)}
      </DragOverlay>
    </DndContext>
  );
};
