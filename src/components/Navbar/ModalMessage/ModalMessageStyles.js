import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 140px;
    right: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    width: 90%;
    max-width: 450px;
    padding: 10px 20px;
    background: #000;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`;

export const MessageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;

    p{
        width: 100%;
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }
`;

export const LinkCartStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;    
    color: white;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
`;