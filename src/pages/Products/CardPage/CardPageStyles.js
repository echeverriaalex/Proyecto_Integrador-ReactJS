import styled from "styled-components";
import { colorCategory } from "../../../utils/setColorBackground";

export const CardPageContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    padding: 15px;

    @media (max-width: 576px){
        padding: 5px;
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 10px;
    background: ${({ typeSelected }) => colorCategory[typeSelected]};

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 8px;
    }
`;

export const OthersImagesContainerStyled = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;

    @media (max-width: 576px){
        width: 100%;
        padding: 10px 0px;
        flex-direction: row;
        background-color: #d1d1d1;
    }
`;

export const ThumbnailContainerStyled = styled.div`
    border: 2px solid #000;
    background-color:rgba(83, 83, 83, 0.38);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    padding: 10px;

    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 576px){

        width: 100px;
        height: 100px;
    }
`;

export const ImageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color:rgba(100, 100, 100, 0.49);
    border-radius: 20px;
    max-width: 700px;
    max-height: 700px;

    img {
        width: 650px;
        height: 650px;
        max-width: 100%;
        max-height: 100%;
    }

    @media (max-width: 576px) {
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-height: 100%;
        padding: 10px;

        img {
            width: 300px;
            height: 300px;
            width: 100%;
            max-width: 100%;
        }
    }
`;

export const DetailsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 10px;
    background-color: #d1d1d1;
    width: 50%;
    max-width: 400px;
    border-radius: 5px;
    border: 2px solid #000;
    height: 100%;
    
    @media (max-width: 576px) {
        width: 100%;
    }
`;


export const InfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    border-radius: 5px;
    border: 2px solid #000;
    
    h2, h3{
        font-size: 1.5rem;
        font-family: monospace, 'Arial', sans-serif;
    }

    h3, p{
        font-size: 1.2rem;
        font-weight: 700;
        font-family: monospace, 'Arial', sans-serif;
    }

    h3{
        display: block;
        color: white;
        background: #000;
        padding: 8px;
        width: 100%;
        text-align: center;
    }
`;