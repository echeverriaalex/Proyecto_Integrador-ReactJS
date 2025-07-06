import styled from "styled-components";
import { motion } from "framer-motion";
import { getCardColorByCategory, getCategoryColorByCategory } from "../../../utils/setColorBackground";

export const ContentCardStyled = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 15px 5px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    height: 100%;

    &:hover {
        transform: scale(0.95);
        transition: all 1s;
    }

    h2{
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        padding: 5px 20px;
        text-align: center;
        font-size: 1rem;
        color: white;
        font-family: 'Arial', sans-serif;
    }

    p{
        font-size: 1.2rem;
        font-family: 'Arial', sans-serif;
    }

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

    @media(max-width: 576px){
        gap: 5px;
        padding: 10px 5px;

        h3{
            font-size: 1rem;
            padding: 0px;
        }

        p{
            font-size: 1rem;
        }
    }

    //background-image: url("https://img.freepik.com/vector-gratis/diseno-fondo-fuego_1189-229.jpg");
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
    background: #d1d1d1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    padding: 10px 5px;

    h3{
        text-align: center;
        padding: 10px;
        color: #000;
        background: #b1b1b1;
        border-radius: 20px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }
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
    height: 50px;
    width: 200px;
    font-size: 1rem;
    padding: 5px;
    border-radius: 10px;
    background: #000;
    color: white;
    cursor: pointer;
    border: none;

    img{
        height: 1.2rem;
    }
`;