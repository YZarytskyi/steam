import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background: #171A21;
        color: #FFFFFF;
        overflow-y: scroll;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    ul {
    list-style: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul {
        margin: 0;
        padding: 0;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        border: none;
        font-family: inherit;
        cursor: pointer;
        padding: 0;
        color: inherit;
        font-size: inherit;
        background-color: transparent;
    }
    input {
        border: none;
        outline: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;

export { GlobalStyles };
