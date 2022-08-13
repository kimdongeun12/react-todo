import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle`
    ${reset}
    body { line-height: 1.2; font-size: 16px; }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    #root {
        min-width: 320px;
    }
    *:focus { box-shadow:none; -webkit-box-shadow:none; outline: 0px dotted #ffffff; }
    *:focus:not(:focus-visible) { outline: 0; }
    button { padding:0; border:none; cursor:pointer; font-family:inherit; background:none; border-radius:0; }
`;

export default GlobalStyles;