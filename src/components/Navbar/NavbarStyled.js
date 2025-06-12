import styled from "styled-components";
import { HiMenu   } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const SearchIcon = styled(HiOutlineSearch)`
    font-size: 2rem;
    color: white;
    cursor: pointer;    
    user-select: none;
    
    padding: 0px;
    margin: 0px;
    height: 100%;
    max-height: 20px;
    width: 100%
    max-width: 20px;
    display: flex;
    align-items: center;
`;

export const MenuIconStyled = styled(HiMenu)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;



    padding: 0px;
    margin: 0px;
    height: 100%;
    max-height: 20px;
    width: 100%
    max-width: 20px;
    display: flex;
    align-items: center;
`;

export const UserIcon = styled(HiUser)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    min-width: 50px;
    user-select: none;


    padding: 0px;
    margin: 0px;
    height: 100%;
    max-height: 20px;
    width: 100%
    max-width: 20px;
    display: flex;
    align-items: center;
`;

export const CartIconStyled = styled(HiOutlineShoppingCart)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;


    padding: 0px;
    margin: 0px;
    height: 100%;
    max-height: 20px;
    width: 100%
    max-width: 20px;
    display: flex;
    align-items: center;
`;

export const HeaderStyled = styled.header`
    /*position: fixed;*/
    z-index: 70;
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a01c05;
    border-bottom: 1px solid white;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 0px;
    }
`;

export const NavbarStyled = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    max-width: 1200px;
    /*padding: 1rem 3rem;*/;
    
    @media (max-width: 768px){
        /*padding: 1rem 2rem;*/
    }

    @media (max-width: 576px){
        padding: 5px;
        gap: 10px;
    }
`;

export const MenuContainerStyled = styled(motion.div)`
    display: flex;
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
`;

export const IconsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    /*padding: 10px;*/
    height: 100%;
`;

export const ContainerStyled = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
`;

export const LogoLinkContainer = styled(NavLink)`
    display: flex;
    height: 50px;

    img{
        max-width: 100%;
        max-height: 100%;
    }
    
    @media (max-width: 576px){
        height: 40px;
    }
`;

/* Nav Link cumple la misma funcion que un a con href */
export const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;

    @media (max-width: 576px){
        width: 100%;
        max-width: unset;
        padding: 0px;
    }
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 5px 10px;
    font-size: .8rem;
    border-radius: 5px;
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;
    width: 100%
    max-height: 100%;

    a{
        width: 100%;
        font-size: 1.2rem;
        color: white;
        /* padding: 1rem 1.5rem;*/
        background: red;
    }

    @media (max-width: 576px){
        /*background: lightcoral;*/
        padding: 0px;
    }
`;

export const LinkContainerStyled = styled.div`    
    font-size: 1.2rem;
`;