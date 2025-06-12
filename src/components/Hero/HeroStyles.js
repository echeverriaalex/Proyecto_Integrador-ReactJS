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
        font-size: 2rem;
        font-weight: 800;
        font-family: "Didact Gothic", sans-serif;
        text-align: left;
    }


    @media (max-width: 576px) {
        flex-direction: column;
        margin: 0px;
        padding: 5px;

        h1{
            font-size: 2rem;
        }
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
        /*text-shadow: -5px 5px 0px #0e31fa;*/
        font-family: "Special Gothic Expanded One", sans-serif;
        font-style: normal;
    }

    h2{
        color: white;
        font-family: "Special Gothic Expanded One", sans-serif;
        font-size: 1.4rem;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        padding: 10px;
        width: 100%;
        h1{
            font-size: 1.8rem;
        }

        h2{
            color: white;
            font-family: "Special Gothic Expanded One", sans-serif;
            font-size: 1rem;
        }
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 450px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    }

    @media (max-width: 576px) {
        img{
            height: 300px;
        }
    }
`;