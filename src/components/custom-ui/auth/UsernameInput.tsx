import { ReactFC } from '@/types';
import { FiUser } from 'react-icons/fi';
import { CustomInput, CustomInputProps } from '../CustomInput';

export type UsernameInputProps = Omit<CustomInputProps, 'leftIcon' | 'name' | 'placeholder'>;

export const UsernameInput: ReactFC<UsernameInputProps> = (props) => {
  return (
    <CustomInput
      name="username"
      placeholder="Username"
      leftIcon={FiUser}
      {...props}
    />
  );
};
