import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  html,body,#root, button,input, textarea{
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  html,body,#root, button,input, textarea{
    width: 100%;
    height: 100%;
 
    background:${({ theme }) => theme.colors.gray[900]};
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
   }

  ul,ol {
    list-style: none;
  }

`;
