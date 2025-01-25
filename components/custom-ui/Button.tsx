import { ReactFC } from "../../types";

export const Button: ReactFC<{}> = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md">
      hello {children}
    </button>
  );
};
