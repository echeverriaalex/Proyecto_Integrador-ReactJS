import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
`;

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 20px;
    right: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    
    width: 450px;
    //height: calc(100vh - 4rem);
    height: calc( 100vh - 40px);
    padding: 15px;
    background: #494949ff;
    background: #000;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    //overflow-y: auto;

    @media (max-width: 576px){
        top: 0px;
        right: 0px;
        border-radius: 0px;
        width: 90%;
        //height: calc( 100vh - 50px);
        height: 100vh;
    }
`;

export const HeadContainerStyled = styled.div`    
    display: flex;
    align-items: center;
    gap: 15px;    
    outline: none;
`;

export const LinkCartStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;    
    color: white;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
`;

export const MainContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    // para que los contenidos no sobresalgan del carrito 
    overflow-y: auto; 
`;

export const ProductsWrapperStyled = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;    
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
    scrollbar-color: #2c2c2cd6 transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2c2c2cd6;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const EmptyContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;

    img{
        max-width: 100px;
        max-height: 100px;
    }

    p{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }
`;