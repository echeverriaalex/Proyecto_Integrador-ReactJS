import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    /*max-width: 1200px;*/
    border-radius: 10px;
    background: #464645;
    padding: 10px;
    h1{
        font-size: 3rem;
        font-weight: 800;
        font-family: "Didact Gothic", sans-serif;
        text-align: left;
    }


    @media (max-width: 576px) {
        flex-direction: column;
        margin-top: 0px;
        background:#eca41e;
        margin: 10px;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 2rem;
    width: 50%;
    h1{
        color: white;
        color:#ceb214;
        text-shadow: -5px 5px 0px #0e31fa;
    }

    p{
        color: white;
        font-family: monospace;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    iframe,
    img{
        height: 400px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    }
`;
