import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }  

  html,
  body {
    min-height: 100vh;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    color:${theme.colors.black}
  }
`;
export default GlobalStyle;
