import styled, { css } from 'styled-components';
import { Variants } from './types';

type ButtonProps = {
  variant?: Variants;
};

export const Container = styled.button<ButtonProps>`
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  transition: all linear 0.1s;
  border-radius: 8px;

  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      color: ${theme.colors.green[400]};
      outline: 1px solid ${theme.colors.green[500]};

      &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.green[500]};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      color: ${theme.colors.white};
      background: ${theme.colors.green[500]};
      &:hover {
        background: ${theme.colors.green[400]};
      }
    `}

    
  ${({ variant, theme }) =>
    variant === 'link' &&
    css`
      color: ${theme.colors.gray[200]};
      background: transparent;
      &:hover {
        color: ${theme.colors.white};
      }
      &:focus {
        color: ${theme.colors.green[400]};
      }
    `}

    ${({ variant, theme }) =>
    variant === 'danger' &&
    css`
      color: ${theme.colors.gray[200]};

      &:hover {
        color: ${theme.colors.red[500]};
      }
    `}
`;
