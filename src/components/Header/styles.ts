import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;

  background: ${({ theme }) => theme.colors.gray[800]};

  padding: 1.25rem 0;

  img {
    height: 2rem;
    object-fit: contain;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 1.5625rem;
  }
`;
