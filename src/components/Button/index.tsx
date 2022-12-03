import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button(props: IButtonProps) {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
}
