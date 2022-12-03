import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};

  border-radius: 8px;

  padding: 2.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 0.875rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ImageContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green[400]};

  padding: 4px;
  border-radius: 8px;
  img {
    height: 50px;
    border-radius: 5px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.green[400]};
  }
`;

export const ContainerFlags = styled.div`
  color: ${({ theme }) => theme.colors.green[400]};
`;

export const Footer = styled.div`
  margin-top: 1.5rem;

  > span {
    font-weight: bold;

    color: ${({ theme }) => theme.colors.white};
  }

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      resize: none;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.green[400]};

      height: 96px;
      border-radius: 8px;

      outline: none;

      color: ${({ theme }) => theme.colors.gray[200]};
      padding: 1.375rem;
    }

    div {
      display: flex;
      align-items: flex-start;
      margin-top: 1rem;
    }
  }
`;

export const ContainerComments = styled.ul`
  margin-top: 1.125rem;
`;
