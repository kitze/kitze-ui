import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactFC } from "../../types";
import { Drawer } from "vaul";
import { cn } from "@/cn";
import { VaulContext } from "./VaulContext";

export interface CustomVaulClassNames {
  overlay?: string;
  content?: string;
  handle?: string;
  title?: string;
}

export interface CustomVaulProps {
  title?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  classNames?: CustomVaulClassNames;
}

export const CustomVaul: ReactFC<CustomVaulProps> = ({
  children,
  title,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  trigger,
  classNames,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const onOpenChange = isControlled ? controlledOnOpenChange : setInternalOpen;

  const close = () => {
    onOpenChange?.(false);
  };

  return (
    <VaulContext.Provider value={{ close }}>
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

        <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay
            className={cn(
              "fixed inset-0 bg-black/40 backdrop-blur-md dark:bg-black/60 z-[9999]",
              classNames?.overlay
            )}
          />
          <Drawer.Content
            className={cn(
              "bg-white dark:bg-zinc-900 w-[95%] flex flex-col rounded-t-[10px] py-6 fixed bottom-0 left-0 right-0 z-[9999] mx-auto",
              "dark:border-t dark:border-zinc-800",
              classNames?.content
            )}
          >
            <div className="p-2 bg-white dark:bg-zinc-900 rounded-t-[10px] flex-1 overflow-y-auto">
              <div
                className={cn(
                  "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700 mb-8",
                  classNames?.handle
                )}
              />
              {title && (
                <div
                  className={cn(
                    "text-lg font-semibold mb-4 text-zinc-900 dark:text-white",
                    classNames?.title
                  )}
                >
                  {title}
                </div>
              )}
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </VaulContext.Provider>
  );
};
