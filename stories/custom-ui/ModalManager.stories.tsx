import type { Meta, StoryObj } from "@storybook/react";
import {
  ModalManager,
  useModal,
} from "../../src/components/custom-ui/ModalManager";
import { Button } from "../../src/components/ui/Button/Button";

const meta = {
  title: "Custom UI/ModalManager",
  component: ModalManager,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModalManager>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => {
  const { openModal, closeAllModals } = useModal();

  const openFirstModal = () => {
    openModal({
      title: "First Modal",
      component: () => (
        <div className="vertical space-y-4">
          <p>This is the first modal content</p>
          <Button
            onClick={() =>
              openModal({
                title: "Second Modal",
                component: () => (
                  <div className="vertical space-y-4">
                    <p>This is the second modal content</p>
                    <Button onClick={closeAllModals}>Close All Modals</Button>
                  </div>
                ),
              })
            }
          >
            Open Second Modal
          </Button>
        </div>
      ),
    });
  };

  return (
    <div className="vertical space-y-4">
      <Button onClick={openFirstModal}>Open First Modal</Button>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ModalManager>
      <DemoContent />
    </ModalManager>
  ),
};
