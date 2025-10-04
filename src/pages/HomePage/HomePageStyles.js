import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { themePage } from "../../components/styles/GlobalStyles";

export const HomePageWrapper = styled.div`
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px;
`;

export const TitleSectionStyled = styled.h2`
    font-family: Montserrat, sans-serif;
    color: #fff;
    font-size: 4rem;
    width: 100%;

    @media (max-width: 1000px){
        font-size: 2.7rem;
    }

    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`;

export const CardsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    & > :nth-child(even) {
        flex-direction: row-reverse;
        border-radius: 160px 10px 190px 10px;

        img{
            border-radius: 70px 10px 190px 70px;
        }
    }

    @media (max-width: 1000px){
        & > :nth-child(even) {
            border-radius: 10px 100px 30px 100px;
            gap: 5px;

            img{
                width: 55%;
                height: 450px;
                border-radius: 10px 100px 30px 100px;
            }
        }
    }

    @media (max-width: 576px){
        flex-direction: column;
        gap: 20px;

        & > :nth-child(even) {
            flex-direction: column;
            border-radius: 10px;

            img{
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
        }
    }
`;

export const CardWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px;
    width: 100%;
    background-color: #000000ff;
    border-radius: 10px 70px 190px 180px;

    img{
        width: 60%;
        height: 500px;
        border-radius: 10px 70px 190px 180px;
    }

    @media (max-width: 1000px){
        border-radius: 10px 100px 30px 100px;
        gap: 5px;
        img{
            width: 55%;
            height: 450px;
            border-radius: 10px 100px 30px 100px;
        }
    }

    @media (max-width: 576px){
        flex-direction: column;
        border-radius: 10px;

        img{
            border-radius: 10px;
            width: 100%;
            height: auto;
        }
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
    gap: 15px;
    padding: 10px;

    h2, p{
        color: #fff;
        width: 100%;
    }

    h2{
        font-family: Montserrat, sans-serif;
        font-size: 3rem;
    }

    p{
        font-size: 1.3rem;
        font-family: Barlow, sans-serif;
    }

    @media (max-width: 1000px){
        width: 45%;

        h2{
            font-size: 2.5rem;
        }

        p{
            font-size: 1.2rem;
        }
    }

    @media (max-width: 576px){
        width: 100%;
        h2{
            font-size: 2rem;
        }

        p{
            font-size: 1rem;
        }
    }
`;


export const LinkButtonStyled = styled(NavLink)`
    padding: 20px 50px;
    background-color: #1a1a1aff;
    background-color: #000000ff;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.4rem;
    font-family: Montserrat, sans-serif;
`;