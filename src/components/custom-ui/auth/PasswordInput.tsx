import { ReactFC } from "@/types";
import { FiLock } from "react-icons/fi";
import { CustomInput, CustomInputProps } from "../CustomInput";

export type PasswordInputProps = Omit<CustomInputProps, "leftIcon" | "type">;

export const PasswordInput: ReactFC<PasswordInputProps> = ({
  placeholder = "Password",
  ...props
}) => {
  return (
    <CustomInput
      name="password"
      placeholder={placeholder}
      type="password"
      leftIcon={FiLock}
      {...props}
    />
  );
};
