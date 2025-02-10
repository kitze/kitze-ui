export type KanbanColumnId = string;

export type KanbanColumnClassNames = {
  card?: string;
  cardWhenOver?: string;
  circle?: string;
};

export type KanbanColumnConfig<T extends KanbanColumnId = KanbanColumnId> = {
  id: T;
  title: string;
  color?: string;
  tooltip?: string | React.ReactNode;
  onAddNew?: () => void;
  classNames: KanbanColumnClassNames;
};

export type KanbanConfig<T extends KanbanColumnId = KanbanColumnId> = {
  columns: KanbanColumnConfig<T>[];
  getColumnId: (item: any) => T;
  updateItem: (itemId: string, columnId: T) => void;
};

export type KanbanProps<T extends KanbanColumnId = KanbanColumnId> = {
  items: any[];
  config: KanbanConfig<T>;
  renderItem: (item: any) => React.ReactNode;
  enableDragging?: boolean;
};

export type KanbanColumnProps<T extends KanbanColumnId = KanbanColumnId> = {
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
