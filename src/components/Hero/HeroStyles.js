import styled from "styled-components";
import wallpaper  from "../../assets/images/wallpaper.jpg";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 480px;
    background-image: url(${wallpaper});
    background-size: cover;
    background-position: bottom;
    
    h1{
        font-size: 2rem;
        font-weight: 800;
        font-family: "Didact Gothic", sans-serif;
        text-align: left;
    }

    @media (max-width: 576px) {
        max-height: 200px;

        h1{
            font-size: 2rem;
        }
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px;
    width: 100%;
    background-color:rgba(19, 19, 19, .5);

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
    max-width: 100%;

    img{
        /*height: 450px;*/
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
        /*max-height: calc(100vh - 70px);*/
    }

    @media (max-width: 576px) {
        img{
            height: 300px;
        }
    }
`;