import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .container {
        max-width: 800px;
        width: 100%;
        padding: 1rem;
        margin: auto;
    }

    h1 {
        font-weight: 600;
        text-align: center;
        margin: 2rem 0;
        position: relative;
    }

    h1::after {
        background: #005052;
        content: '';
        width: 50px;
        height: 3px;

        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default GlobalStyle;