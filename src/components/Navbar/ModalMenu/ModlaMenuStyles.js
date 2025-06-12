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
    top: 0px;
    left: 0px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
    /* height: calc(100vh - 4rem); */
    height: 100vh;
    padding: 15px;
    background: #3c3c3d;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    @media (max-width: 576px){
        width: 100vw;
    }
`;

export const HeadContainerStyled = styled.div`    
    display: flex;
    gap: 15px;
    justify-content: space-between;
    width: 2rem;
    /*height: 2rem;*/
    outline: none;
    border: none;
    /*border-radius: 10px;*/
    width: 100%;
    color: white;
`;