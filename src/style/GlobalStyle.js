import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Shadows Into Light', cursive;
  }
  
  body,
  html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--blue100);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
  
  :root {
    --blue100: #bedaef;
    --blue400: #6d9ebd;
    --blue600: #1a4159;
    --blue900: #0a1a24;
    --blueShadow: #0a1a2480;
    --blackShadow: #0000004d;
    --white: #ffffff;
}

  ::-webkit-scrollbar{
      width: 15px;
    }
    ::-webkit-scrollbar-track{
    background-color: var(--white);
}
  ::-webkit-scrollbar-thumb{
      background-color: var(--blue600);
      border: 6px solid var(--white);
      border-radius: 20px;
    }
`