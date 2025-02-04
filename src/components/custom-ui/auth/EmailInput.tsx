import { ReactFC } from '@/types';
import { FiMail } from 'react-icons/fi';
import { CustomInput, CustomInputProps } from '../CustomInput';

export type EmailInputProps = Omit<CustomInputProps, 'leftIcon' | 'name' | 'placeholder'>;

export const EmailInput: ReactFC<EmailInputProps> = (props) => {
  return (
    <CustomInput
      name="email"
      placeholder="Email address"
      leftIcon={FiMail}
      {...props}
    />
  );
};
