import { ReactFC } from '@/types';
import { FiUser } from 'react-icons/fi';
import { CustomInput, CustomInputProps } from '../CustomInput';

export type NameInputProps = Omit<CustomInputProps, 'leftIcon' | 'name' | 'placeholder'>;

export const NameInput: ReactFC<NameInputProps> = (props) => {
  return (
    <CustomInput
      name="name"
      placeholder="Full name"
      leftIcon={FiUser}
      {...props}
    />
  );
};
