import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{

    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background: #083561;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;