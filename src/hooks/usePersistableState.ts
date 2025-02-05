import { useState, useEffect } from "react";

export function usePersistableState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Create unique storage key
  const storageKey = `persisted_state_${key}`;

  // Initialize state with stored value or initial value
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${storageKey}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error setting localStorage key "${storageKey}":`, error);
    }
  }, [storageKey, state]);

  return [state, setState];
}
