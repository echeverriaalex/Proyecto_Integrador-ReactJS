import { motion } from "framer-motion";
import styled, { css } from "styled-components";


export const ModalOverLayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    width: 100%;
    height: 100vh;
    background:rgba(143, 143, 143, 0.47);

    ${({ isHidden }) =>
        !isHidden &&
        css`
            backdrop-filter: blur(4px);
    `}

    @media (max-width: 576px) {
        /*
        width: 100vw;
        height: 100vh;
        background: pink;
        height: 100%;
        */
        

        
    }
`;

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 20px;
    right: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    width: 450px;
    /* height: calc(100vh - 4rem); */
    height: calc( 100vh - 40px);
    padding: 15px;
    background: #3c3c3d;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    @media (max-width: 576px){
        top: 10px;
        width: 80vw;
        height: calc( 100vh - 70px);
        right: 5px;
    }
`;

export const HeadContainerStyled = styled.div`    
    display: flex;
    gap: 15px;
    align-items: center;
    width: 2rem;
    /*height: 2rem;*/
    outline: none;
    border: none;
    /*border-radius: 10px;*/
    width: 100%;
    color: white;
`;

export const MainContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
`;

export const ProductsCartContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;

    p{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

/*
export const ListProductsCartContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #c247d3;
    overflow-y: auto;
    padding: 10px;
`;
*/

export const CardCartStyled = styled.div`
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background:rgb(113, 157, 165);

    img{
        width: 70px;
        height: 70px;
        border-radius: 10px;
    }

    /* Reseteo los estilos porque cuando dice no hay productos 
    es un flex centrado ocupando todo el contenedor */
    p{
        display: block;
    }

    h3{
        text-transform: capitalize;
    }
`;

export const Increase = styled.div`

    background: lightgreen;

`

export const TotalContainerStyled = styled.div`
    /*background: green;
    padding: 10px;
    */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    
`;

export const DataContainerStyled = styled.div`
    background: lightblue;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;

    p{
        font-size: 1.1rem;
        font-weight: 700;
        color: #333;
    }
`;


export const ButtonContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button{
        display: flex;
        justify-content: center;
        gap: 5px;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        color: white;
    }


    @media (max-width: 576px){
        flex-direction: column;
        gap: 10px

        button{
            width: 100%;
            padding: 10px;
            border-radius: 10px;
            font-weight: 400;
        }
    }
`;