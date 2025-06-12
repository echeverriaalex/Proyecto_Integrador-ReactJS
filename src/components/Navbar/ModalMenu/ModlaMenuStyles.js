import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 20px;
    left: 10px;
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