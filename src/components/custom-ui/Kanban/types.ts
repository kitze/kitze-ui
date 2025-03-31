export type KanbanColumnId = string;

export type KanbanColumnClassNames = {
  card?: string;
  cardWhenOver?: string;
  circle?: string;
};

export interface KanbanColumnConfig<T extends KanbanColumnId> {
  id: T;
  title: string;
  color?: string;
  tooltip?: string | React.ReactNode;
  classNames?: {
    circle?: string;
    card?: string;
    cardWhenOver?: string;
  };
  allowCreateNew?: boolean;
  onAddNew?: () => void;
  loading?: boolean;
}

export interface KanbanConfig<T extends KanbanColumnId> {
  columns: KanbanColumnConfig<T>[];
  getColumnId: (item: any) => T;
  updateItem: (itemId: string, columnId: T) => void;
}

export interface KanbanProps<T extends KanbanColumnId> {
  items: any[];
  config: KanbanConfig<T>;
  renderItem: (item: any) => React.ReactNode;
  enableDragging?: boolean;
}

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
