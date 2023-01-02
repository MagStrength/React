import { createGlobalStyle } from "styled-components"

export const darkTheme = {
  body: "#3e3e3e",
  textColor: "#fff",
  headingColor: "#fff",
  borderColor: "#fff",
  inputColor: "rgba(255, 255, 255, 0.53);",
}

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#704aa7a9",
  background: "#fff",
}

export const GlobalStyles = createGlobalStyle`

 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }

}
 h1, h2{
   color: ${props => props.theme.headingColor};
 }

 button {
 background: ${props => props.theme.body};
 color: ${props => props.theme.textColor};
`

