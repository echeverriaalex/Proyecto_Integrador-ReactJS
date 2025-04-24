import styled from "styled-components";

export const HeroContainer = styled.section`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    /*max-width: 1200px;*/
    border-radius: 10px;
    background: #464645;

    h1{
        font-size: 3rem;
        font-weight: 800;
        font-family: "Didact Gothic", sans-serif;
        text-align: left;
    }


    @media (max-width: 576px) {
        flex-direction: column;
        margin-top: 0px;
        background: #a19c9d;
        margin: 10px;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    width: 50%;
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
    }
`;
