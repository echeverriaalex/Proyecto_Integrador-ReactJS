import styled from "styled-components";
import { getCardColorByCategory } from "../../utils/setColorBackground";

export const CategoriesRecommendedContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 90%;
    /*
    background-color: brown;
    padding: 20px;
    */

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const CategoryContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%;
    
    /*background-color: green;*/

    

    @media (max-width: 576px) {
        padding: 0px;

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

export const CardsContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    overflow: auto;
    padding: 20px 0px;
    scroll-behavior: smooth;
    cursor: grab;
    /*box-shadow: 0px 15px 15px 0px rgba(92, 92, 92, 0.93);*/

    /*
    &::-webkit-scrollbar {
        display: none;
    }
    */

    @media (max-width: 576px) {
        scrollbar: none;
        gap: 5px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const CardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    min-width: 300px;
    background: ${({ type }) => getCardColorByCategory(type)};
    border: 1px solid black;
    border-radius: 10px;
    /*user-select: none;*/

    h2{
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: capitalize;
        font-family: 'Courier New', Courier, monospace;
        color: #fff;
    }

    @media (max-width: 576px) {
        min-width: 250px;
    }
`;

export const ImgContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    /*background-color: lightpink;*/

    img{
        max-width: 100%;
        max-height: 100%;
    }

    @media (max-width: 576px) {
        height: 130px;
    }
`;