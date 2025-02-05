import { Meta, StoryObj } from "@storybook/react";
import { Kanban } from "../../src/components/custom-ui/Kanban/Kanban";
import { ReactFC } from "../../src/types";
import { useState } from "react";

type Status = "todo" | "in_progress" | "done";

interface Task {
  id: string;
  title: string;
  status: Status;
}

const meta = {
  title: "Custom UI/Kanban",
  component: Kanban,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kanban>;

export default meta;
type Story = StoryObj<typeof meta>;

const KanbanDemo: ReactFC<{}> = () => {
  const [items, setItems] = useState<Task[]>([
    { id: "1", title: "Task 1", status: "todo" },
    { id: "2", title: "Task 2", status: "in_progress" },
    { id: "3", title: "Task 3", status: "done" },
  ]);

  const config = {
    columns: [
      {
        id: "todo",
        title: "To Do",
        color: "sky-500",
      },
      {
        id: "in_progress",
        title: "In Progress",
        color: "emerald-500",
      },
      {
        id: "done",
        title: "Done",
        color: "violet-500",
      },
    ],
    getColumnId: (item: Task) => item.status,
    updateItem: (itemId: string, newStatus: Status) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, status: newStatus } : item
        )
      );
    },
  };

  return (
    <div className="h-[500px] w-[800px] bg-background p-4 rounded-lg border border-foreground/10">
      <Kanban
        items={items}
        config={config}
        renderItem={(item) => (
          <div className="bg-background p-4 rounded-lg border border-foreground/10 shadow-sm">
            <p className="text-foreground">{item.title}</p>
          </div>
        )}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <KanbanDemo />,
};
