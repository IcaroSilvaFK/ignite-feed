import styled, { css } from 'styled-components';

type HeaderProps = {
  cover?: string;
};

export const Container = styled.aside`
  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.gray[800]};

  padding-bottom: 2rem;
`;

export const Header = styled.header<HeaderProps>`
  height: 72px;

  ${({ cover }) =>
    cover &&
    css`
      background-image: url('${cover}');
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: calc(0px - 1.5rem - 6px);

  > div {
  }
`;

export const ImageContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green[400]};
  border-radius: 8px;
  width: 60px;
  height: 60px;
  padding: 4px;
  img {
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6px;
  padding: 1rem 0 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};

  strong {
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 0.875rem;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const Footer = styled.footer`
  padding: 0 2rem;

  margin-top: 1.5rem;
`;
