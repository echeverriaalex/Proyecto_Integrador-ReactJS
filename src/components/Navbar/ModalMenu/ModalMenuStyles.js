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
    left: 10px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 250px;
    /* height: calc(100vh - 4rem); */
    height: calc( 100vh - 40px);
    padding: 15px;
    background: #3c3c3d;
    border-radius: 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    overflow-y: auto;

    @media (max-width: 576px){
        top: 0px;
        left: 0px;
        width: 100vw;
        border-radius: 0px;
        height: 100vh;
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

export const NavLinkMobileStyled = styled(NavLink)`
    width: 100%;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid white;

    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background:rgb(121, 20, 3);
        text-decoration: underline;
        text-underline-offset: 5px; /* ajusta la separación */
    }

    img{
        width: 1rem;
    }
        
    @media (max-width: 882px){
        //background: #04a3d4ff;
        display: grid;
        flex-wrap: unset;
        grid-template-columns: repeat(auto-fit, 120px);
        width: 100%;
    }

    @media (max-width: 576px){
        flex-direction: column;
        text-align: start;
        justify-content: start;
        width: 100%;
    }

`;

export const NavLinkContainerStyled = styled.div`
    padding: 10px 20px;
    color: white;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 700;
    font-size: 1.2rem;
    border-bottom: 1px solid white;

    
    &:hover {
        transition: all .5s;
        border-radius: 5px;
        text-underline-offset: 5px;
    }

    div{
        display: none;
        flex-direction: column;
        //width: 100%;
        gap: 10px;
        color: white;
        padding: 10px 20px;
        border-bottom: none;
    }

    &:hover div{
        display: flex;
    }

    a{
        font-size: 1.1rem;
        border-bottom: 1px solid white;
    }
`;