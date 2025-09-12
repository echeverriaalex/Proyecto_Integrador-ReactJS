import styled, { css } from 'styled-components';
//import styled from "styled-components";
import { HiMenu   } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const CloseIcon = styled(MdClose)`
    font-size: 3rem;
    color: white;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
`;

export const MenuIconStyled = styled(HiMenu)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
`;

export const UserIcon = styled(HiUser)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    user-select: none;
`;

export const NavbarContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //gap: 10px;
    //max-width: 1400px;
    width: 100%;
    //background: #d404d4ff;


    @media (max-width: 576px){
        //display: none;
    }








    // esto era el header



    background: #a01c05;
    border-bottom: 1px solid white;
    padding: 5px 20px;

    backdrop-filter: blur(8px);

    @media (max-width: 768px){
        padding: 10px;
    }

    @media (max-width: 576px){
        padding: 5px;
    }
`;


// Estilos para Mobile
export const NavbarMobileContainerStyled = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    width: 100%;

    @media (max-width: 576px){
        display: flex;
    }
`;

export const MobileContainerStyled = styled.div`
    display: none;
    //display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 576px){
        display: flex;
    }
`;

export const MobileMenuContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const NavbarStyled = styled.nav`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 882px){
        gap: 5px;
    }

    @media (max-width: 576px){
        display: none;
    }
`;

/* Nav Link cumple la misma funcion que un a con href */
export const NavLinkStyled = styled(NavLink)`
    font-weight: 700;
    color: white;
    font-family: montserrat;
    text-align: center;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background:rgb(121, 20, 3);
        text-decoration: underline;
        text-underline-offset: 5px; /* ajusta la separación */
    }

    @media (max-width: 882px){
        width: 100%;
        padding: 10px;
    }

    @media (max-width: 576px){
        flex-direction: column;
        text-align: start;
        justify-content: start;
        width: 100%;
    }
`;

export const NavLinkContainerStyled = styled.div`
    padding: 10px 25px;
    cursor: pointer;

    p{
        font-weight: 700;
        color: white;
        font-family: montserrat;
        text-align: center;
    }
    
    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background:rgb(121, 20, 3);
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    div{
        display: none;
        grid-template-columns: repeat(auto-fit, minmax(100px, 140px));
        width: 500px;
        max-width: 100%;
        justify-content: center;
        gap: 10px;
        color: white;
        padding: 10px;
        margin-top: 10px;
        background: #921a05;
        border-radius: 10px;
        position: absolute;
        left: 40%;
    }

    &:hover div{
        display: grid;
    }

    a{
        border: 1px solid white;
    }

    @media (max-width: 882px){
        padding: 10px;

        div{
            left: 15%;
        }
    }
`;

export const MenuContainerStyled = styled(motion.div)`
    //display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    /*padding: 10px;*/

    h2{
        font-size: 1.2rem;
        color: white;
        user-select: none;
    }

    @media (max-width: 576px){
        display: flex;
    }
`;

export const IconsContainerStyled = styled.div`
    display: flex;
    gap: 10px;
`;

export const IconContainerStyled = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background: #571105ff;
    }

    @media (max-width: 576px){
        padding: 5px;
    }
`;

export const BodyNavContainerStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;

    //background: #1fa005ff;

    @media (max-width: 576px){
        //background: #04a3d4ff;
        padding: 0px;
        display: none;
    }
`;

export const ContainerStyled = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    //background: #0346d8ff;

    @media (max-width: 576px){
        justify-content: space-between;
    }
`;

export const LogoLinkContainer = styled(NavLink)`
    display: flex;
    height: 60px;
    margin: 5px;
    padding: 5px;

    img{
        max-width: 100%;
        max-height: 100%;
    }

    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background: #571105ff;
    }
    
    @media (max-width: 576px){
        height: 40px;
    }
`;

export const IconNavLinkStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0px 15px;
    cursor: pointer;

    @media (max-width: 576px){
        gap: 5px;
        padding: 0px 5px;
    }
`;

export const SpanStyled = styled.span`
    font-weight: 700;
    color: white;
    font-family: montserrat;
    text-align: center;
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
    min-height: 100%;

    a{
        width: 100%;
        font-size: 1.2rem;
        color: white;
        /* padding: 1rem 1.5rem;*/
        /*background: red;*/
    }

    @media (max-width: 576px){
        /*background: lightcoral;*/
        padding: 0px;
    }
`;