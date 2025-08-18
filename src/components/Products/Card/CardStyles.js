import styled from "styled-components";
import { cardColorByCategory } from "../../../utils/setColorBackground";

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
    background: ${({ category }) => cardColorByCategory[category]};

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
   
    @media(max-width: 1000px){
        flex-direction: row;
        gap: 5px;
        padding: 10px 5px;

        h3{
            font-size: 1.2rem;
            padding: 0px;
        }

        p{
            font-size: 1rem;
        }
    }
`;

export const PresentationBlockStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 8px;
    border-radius: 10px;
    background: #00000099;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: center;

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
`;