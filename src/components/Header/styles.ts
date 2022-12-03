import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${({ theme }) => theme.colors.gray[800]};

  padding: 22px 0;

  img {
    width: 60px;
    object-fit: cover;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 1.5625rem;
  }
`;
