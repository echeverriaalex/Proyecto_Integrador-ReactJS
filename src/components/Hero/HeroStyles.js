import styled from "styled-components";

export const HeroContainer = styled.section`
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 100%;

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
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    iframe{
        height: 400px;
        max-width: 100%;
        max-height: 100%;
    }
`;
