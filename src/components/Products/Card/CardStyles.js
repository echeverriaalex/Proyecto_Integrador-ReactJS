import styled from "styled-components";
import { motion } from "framer-motion";

const getCategoryColorByCategory = (typeSelected) => {
    switch (typeSelected) {
        case "grass": return "#189c0c";
        case "fire": return "#f01d1d ";
        case "water": return "#0ba6ac";
        case "bug": return "#c98811";
        case "normal": return "#b4b4b4";
        case "flying": return "#33b3ca";
        case "poison":   return "#24c80c";
        case "electric": return "#33b3ca";
        case "ground":   return "#33b3ca";
        case "fairy": return "#33b3ca";
        case "psychic": return "#33b3ca";
        case "rock": return "#612e2a";
        case "ghost": return "#706f6f";
        default: return "#33b3ca";
    }
}

const getCardColorByCategory = (typeSelected) => {
    switch (typeSelected) {
        case "grass": return "linear-gradient(90deg, #72ac34, #5f9a23);";
        case "fire": return "linear-gradient(to bottom right, #ffcccb, #ffa07a);";
        case "water": return "linear-gradient(90deg, #7296db, #5f85c9);";
        case "bug": return "linear-gradient(90deg, #efd84c, #e7c530);";
        case "normal": return "linear-gradient(90deg, #dbd7ee, #c9c2e6);";
        case "flying": return "linear-gradient(90deg, #1de2c0, #40e9d0);";
        case "poison":   return "linear-gradient(90deg, #36db12, #24c80c);";
        case "electric": return "linear-gradient(90deg, #a8ffff, #85f8ef);";
        case "ground":   return "linear-gradient(90deg, , );";
        case "fairy": return "linear-gradient(90deg, , );";
        case "psychic": return "linear-gradient(90deg, , );";
        case "rock": return "linear-gradient(90deg, #5e7c66, #4d6a55);";
        case "ghost": return "linear-gradient(90deg, #c1e0e3, #a7d1d5);";
        default: return "linear-gradient(90deg, #105d5f, #0c4e50);";
    }
}

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const ProductCardStyled = styled.div`
    width: 100%;
    border-radius: 10px;
    cursor: pointer;

    /*
    &:hover {
        box-shadow: 0 14px 18px rgb(200, 212, 34);
        transform: scale(0.95);
        transition: all 1s;
    }
    */
`;

export const ContentCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    padding: 15px 5px;
    border-radius: 6px;
    /*
    box-shadow: 0 4px 8px #000000;
    transition: transform 0.2s ease-in-out;
    */

    h3{
        width: 100%;
        padding: 5px 20px;
        text-transform: capitalize;
        font-size: 1.2rem;
        color: white;
        font-family: 'Arial', sans-serif;
        color: black;
    }

    p{
        font-size: 1.2rem;
        font-family: 'Arial', sans-serif;
    }

    /*
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
    */

    /*
    // Creo una funcion que me devuleva el color segun el tipo de pokemon
    background: ${({ typeSelected }) => {
        switch (typeSelected) {
            case "grass": return "#189c0c";
            case "fire": return "#ce1313";
            case "water": return "#0ba6ac";
            case "bug": return "#c98811";
            case "normal": return "#b4b4b4";
            case "flying": return "#33b3ca";
            case "poison":   return "#33b3ca";
            case "electric": return "#33b3ca";
            case "ground":   return "#33b3ca";
            case "fairy": return "#33b3ca";
            case "psychic": return "#33b3ca";
            case "rock": return "#612e2a";
            case "ghost": return "#706f6f";
            default: return "#33b3ca";
        }
    }};
    */

    // Invoco una funcion que cree fuera del componente
    background: ${({ typeSelected }) => getCardColorByCategory(typeSelected)};


`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 170px;
    /*background: #d902cd;*/
    border-radius: 10px;
    background:rgba(95, 95, 95, 0.45);
    display: flex;
    justify-content: center;

    background: transparent;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`;

export  const InfoContainerStyled = styled.div`
    background: #f0f0f0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    padding: 10px 5px;
`;




export const CategoryContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const CategoryStyled = styled.p`
    display: flex;
    font-size: 16px;
    font-family: "Times New Roman";
    font-weight: bold;
    padding: 4px 16px;
    border-radius: 20px;
    background: ${({ type }) => getCategoryColorByCategory(type)};
    color: white;
    text-transform: capitalize;
`;


export const ButtonStyled = styled(motion.button)`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.3rem;
    padding: 10px;
    border-radius: 10px;
    background:rgb(0, 0, 0);
    color: white;
    cursor: pointer;

    img{
        height: 1.2rem;
    }
`;