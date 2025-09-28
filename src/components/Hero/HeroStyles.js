import styled from "styled-components";
import wallpaper  from "../../assets/images/wallpaper.jpg";
import { NavLink } from "react-router-dom";

export const HeroContainerStyled = styled.section`
    display: flex;
    width: 100%;
`;

export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;    
    max-height: 70vh;

    @media (max-width: 1000px) {
        max-height: unset;
        height: 50vh;
    }

    @media (max-width: 576px) {
        height: 40vh;
    }
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        //object-fit: cover;
        //object-position: bottom;
    }
`;

export const TextContainerStyled = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #13131380;
    padding: 20px;

    h1, h2{
        width: 80%;
        text-align: center;
    }

    h1{
        color: #ceb214;
        font-family: "Special Gothic Expanded One", sans-serif;
        font-style: normal;
        font-size: 4.4rem;
        font-weight: 800;
    }

    h2{
        color: white;
        font-family: "Special Gothic Expanded One", sans-serif;
        font-size: 2rem;
    }

    @media (max-width: 1000px){

        h1, h2{
            width: 90%;
            text-align: center;
        }

        h1{
            font-size: 3rem;
        }

        h2{
            font-size: 1.5rem;
        }
    
    }

    @media (max-width: 576px) {

        h1, h2{
            width: 100%;
            text-align: center;
        }

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