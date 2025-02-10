import { ReactNode } from "react";
import { Spinner, SpinnerProps } from "../ui/Spinner";
import { Suspensed } from "./Suspensed";

interface SuspenseSpinnerProps extends Partial<SpinnerProps> {
  children: ReactNode;
  force?: boolean;
}

export const SuspenseSpinner = ({
  children,
  force,
  ...spinnerProps
}: SuspenseSpinnerProps) => {
  return (
    <Suspensed
      force={force}
      fallback={
        <div className="flex items-center justify-center p-4">
          <Spinner {...spinnerProps} />
        </div>
      }
    >
      {children}
    </Suspensed>
  );
};
