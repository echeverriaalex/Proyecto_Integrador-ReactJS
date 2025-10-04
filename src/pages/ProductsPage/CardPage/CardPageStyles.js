import styled from "styled-components";
import { motion } from "framer-motion";
import { colorCategory } from "../../../utils/setColorBackground";
import { themePage } from "../../../components/styles/GlobalStyles";

export const CardPageContainer = styled.div`
    margin-top: ${ themePage.dimensions.marginTop };
    width: ${ themePage.dimensions.width };
    min-height: ${ themePage.dimensions.minHeight };
    max-width: ${ themePage.dimensions.maxWidth };
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width: 576px) {
        margin-top: ${ themePage.dimensions.marginTopMobile };
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 10px;
    background: ${({ typeselected }) => colorCategory[typeselected]};

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
    width: 120px;
    height: 120px;
    padding: 10px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 576px){

        width: 80px;
        height: 80px;
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
        width: 600px;
        height: 600px;
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
            width: 200px;
            height: 200px;
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
    gap: 10px;
    padding: 10px;
    background-color: #d1d1d1;
    width: 50%;
    max-width: 400px;
    border-radius: 5px;

    @media (max-width: 576px) {
        width: 100%;
        max-width: unset;
    }
`;


export const InfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    padding: 10px;

    h2, p{
        font-family: monospace, 'Arial', sans-serif;
    }

    h2{
        font-size: 2rem;
        font-weight: bolder;
    }
    
    p{
        font-size: 1.2rem;
        font-weight: 700;
    }

    @media (max-width: 576px) {
        max-width: unset;

        h2{
            font-size: 1.5rem;
        }

        p{
            font-size: 1.2rem;
        }
    }
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
        height: 1.5rem;
    }
`;