import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';
import { Variants } from './types';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: Variants;
}

export function Button(props: IButtonProps) {
  const { children, variant, ...rest } = props;

  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
}
