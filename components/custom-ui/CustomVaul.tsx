import React from "react";
import { Drawer } from "vaul";
import { motion, AnimatePresence } from "framer-motion";
import { ReactFC } from "../../types";

interface CustomVaulProps {
  title?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export const CustomVaul: ReactFC<CustomVaulProps> = ({
  children,
  title,
  open,
  onOpenChange,
  trigger,
}) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 0.95 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 pointer-events-none"
          >
            <div className="w-full h-full origin-top">
              <div className="h-full overflow-hidden">
                <div className="opacity-0">{trigger}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-white w-[95%] flex flex-col rounded-t-[10px] h-[96%] fixed bottom-0 left-0 right-0 z-50 mx-auto">
          <div className="p-2 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            {title && <div className="text-lg font-semibold mb-4">{title}</div>}
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
