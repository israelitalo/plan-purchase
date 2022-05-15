import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #FFFFFF;
        --background: #E5E5E5;
        --red: #F53A0B;
        --orange: #F5850B;
        --blue: #191847;
        --black: #151516;
        --gray-700: #666173;
        --gray-500: #C9C5D4;
        --gray-300: #E1DEE8;
        --gray-100: #F4F3F6;
        --calculate-top: 162px;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, select, textarea, button {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        outline: none
    }

    h1, h2, h3, h4, h5, h6, p {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
    }

    strong{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
