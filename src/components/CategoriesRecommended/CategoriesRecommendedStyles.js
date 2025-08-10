import styled from "styled-components";
import { cardColorByCategory } from "../../utils/setColorBackground";

export const CategoriesRecommendedContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    /*
    @media (max-width: 576px) {
        width: 100%;
    }
    */
`;

export const CategoryContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    width: 100%;
    background-color: #000000ff;
    border-radius: 10px;
    
    
    @media (max-width: 576px) {
        padding: 20px 5px;

        h3{
            color: white;
            font-size: 1rem;
            font-weight: 700;
            font-family: monospace;
        }
    }
`;

export const TitleContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    //background-color: #18bb61ff;
    
    h3{
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        font-family: monospace;
    }
    
    a{
        color: white;
        text-decoration: dotted underline;
        font-weight: 700;
        font-family: monospace;
        text-transform: capitalize;
    }

    img{
        width: 30px;
        height: 30px;
    }
`;


export const SliderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: auto;
    padding: 5px;
    //background-color: #d68010ff;

    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge */
    }

    -- scrollbar-width: none; /* Firefox */
    -- -ms-overflow-style: none; /* IE y Edge antiguos */
`;

export const CardsContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    overflow: auto;
    scroll-behavior: smooth;
    cursor: grab;
    cursor: pointer;

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge */
    }

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE y Edge antiguos */
`;

export const CardContainerStyled = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    padding: 5px;
    min-width: 250px;
    background: ${({ type }) => cardColorByCategory[type]};
    border: 1px solid black;
    border-radius: 10px;
    
    h2{
        font-size: 1rem;
        font-weight: 700;
        text-transform: capitalize;
        font-family: "monserrat", sans-serif;
        color: #fff;
        text-align: center;
    }

    @media (max-width: 1000px) {
        min-width: 170px;
        gap: 5px;
    }

    @media (max-width: 576px) {
        min-width: 140px;
    }
`;

export const ImgContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;

    img{
        max-width: 100%;
        max-height: 100%;
    }

    @media (max-width: 576px) {
        height: 130px;
    }
`;