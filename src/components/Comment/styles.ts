import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: flex-start;

  gap: 1rem;
`;

export const ContainerComment = styled.div`
  background: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      align-self: flex-end;
      width: fit-content;
      padding: 0.75rem;
    }
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > button {
    align-self: flex-start;
    width: fit-content;
    padding: 0.75rem 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.875rem;

  strong {
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
