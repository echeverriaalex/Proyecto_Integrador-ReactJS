import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderButtonContainerStyled = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ca1212ff;
    cursor: pointer;
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 2rem;

    @media (max-width: 1000px){
        width: 40px;
        height: 40px;
    }

    @media (max-width: 576px){
        display: none;
    }
`;