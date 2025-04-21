import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Doto:wght@100..900&family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&family=Faster+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Jacquard+12+Charted&family=Julius+Sans+One&family=Jura:wght@634&family=Outfit:wght@100..900&family=Poller+One&family=Rubik+Mono+One&family=Space+Grotesk:wght@300..700&family=Syncopate:wght@400;700&family=Young+Serif&display=swap');


    :root{
        --bg-gradient: linear-gradient(to left,rgb(206, 127, 175), #b39fc2, #4c5187);
        --gb-dark: #171718;

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
        /*background:rgb(23, 23, 24);*/
        background: var(--gb-dark);

        background: radial-gradient(#555555, #222222);
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;