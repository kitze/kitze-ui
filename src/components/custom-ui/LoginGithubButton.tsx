import { FaGithub } from "react-icons/fa";
import { CustomButton, CustomButtonProps } from "./CustomButton";
import { ReactFC } from "@/types";

export type LoginGithubButtonProps = Omit<CustomButtonProps, "leftIcon">;

export const LoginGithubButton: ReactFC<LoginGithubButtonProps> = ({
  children = "GitHub",
  ...props
}) => {
  return (
    <CustomButton
      href="/api/auth/github"
      leftIcon={FaGithub}
      variant="outline"
      size="lg"
      className="w-full"
      {...props}
    >
      {children}
    </CustomButton>
  );
};
