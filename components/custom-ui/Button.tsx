import { ReactFC } from "../../types";

export const Button: ReactFC<{}> = ({ children }) => {
  return <button>{children}</button>;
};
