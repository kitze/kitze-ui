import { createContext, useContext } from "react";

interface VaulContextType {
  close: () => void;
}

export const VaulContext = createContext<VaulContextType | null>(null);

export const useVaul = () => {
  const context = useContext(VaulContext);
  if (!context) {
    throw new Error("useVaul must be used within a VaulProvider");
  }
  return context;
};
