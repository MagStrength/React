import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif; Helvetica, Arial, Roboto, 
    transition: all 0.50s linear;
  }
  `