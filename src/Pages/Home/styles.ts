import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  max-width: 75rem;
  display: grid;

  grid-template-columns: 256px 1fr;
  margin: 2rem auto;
  gap: 2rem;
  align-items: flex-start;
`;

export const Body = styled.main``;
