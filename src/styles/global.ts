import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body,#root{
    width: 100%;

    font-size: 1rem;
    font-family:${({ theme }) => theme.fonts.inter};

    ::-webkit-scrollbar{
      background: ${({ theme }) => theme.colors.zinc[900]};
      width: 10px;
    }
    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.colors.violet[500]};
      border-radius: 10px;
    }
  }
  input,button{
    border: 0;
    outline:0;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul,ol{
    list-style: none;
  }
`;
