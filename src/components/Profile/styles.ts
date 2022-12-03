import styled, { css } from 'styled-components';

import { Variant } from './types';

interface IContainerProps {
  variant: Variant;
}

export const Container = styled.div<IContainerProps>`
  padding: 4px;
  border-radius: 8px;
  img {
    height: 50px;
    border-radius: 5px;
  }

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.green[400]};
    `}
`;
