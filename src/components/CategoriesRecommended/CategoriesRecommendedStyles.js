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
    gap: 20px;
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
    //padding: 20px 0px;
    scroll-behavior: smooth;
    cursor: grab;
    cursor: pointer;
    /*box-shadow: 0px 15px 15px 0px rgba(92, 92, 92, 0.93);*/

 
    

    &::-webkit-scrollbar {
        position: relative;
        left: 300px;
        
        
        
    }

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

        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
        }

        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE y Edge antiguos */
    }
`;

/*
export const SliderButtonContainerStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4e4e4eff;
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 50%;
    color: white;
    font-size: 2rem;

    @media (max-width: 576px){
        display: none;
    }
`;
*/

export const CardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    min-width: 300px;
    background: ${({ type }) => cardColorByCategory[type]};
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