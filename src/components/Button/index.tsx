import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary'}: ButtonProps) {
  return (
    <>
          <ButtonContainer variant={variant}>Envia</ButtonContainer>
    </>
  );
}