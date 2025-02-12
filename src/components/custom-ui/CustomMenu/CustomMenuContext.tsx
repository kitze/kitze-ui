import { createContext, useContext } from "react";

interface CustomMenuContextValue {
  responsive: boolean;
}

export const CustomMenuContext = createContext<CustomMenuContextValue | null>(
  null
);

export const useCustomMenu = () => {
  const context = useContext(CustomMenuContext);
  if (!context) {
    throw new Error("useCustomMenu must be used within a CustomMenuProvider");
  }
  return context;
};
