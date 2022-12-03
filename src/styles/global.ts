import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  html,body,#root{
    width: 100%;
    height: 100%;

    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 1rem;
    background:${({ theme }) => theme.colors.gray[900]};
    -webkit-font-smoothing: antialiased;
  }

  input,button{
    outline: 0;
    border:0;
  }

  button{
    cursor: pointer;
  }

  img, picture {
    max-width: 100%;
    display: block;
    line-height: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
