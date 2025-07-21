import styled from "styled-components";
import { HiMenu   } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

export const CloseIcon = styled(IoIosCloseCircle)`
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
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #a01c05;
    border-bottom: 1px solid white;

    @media (max-width: 768px){
        padding: 10px;
    }

    @media (max-width: 576px){
        padding: 5px 0px;
    }
`;

export const NavbarContainerStyled = styled.div`
   
    display: flex;
    flex-direction: column;
    //gap: 10px;
    max-width: 1400px;
    width: 100%;

    //background: #d404d4ff;

    @media (max-width: 576px){
        display: none;
    }
`;




export const NavbarMobileContainerStyled = styled(motion.NavLink)`
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

export const MobileCainerStyled = styled(motion.NavLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const NavbarStyled = styled.nav`
    //background: #b6d314ff;
    //padding: 15px;
    display: flex;
    gap: 5px;
    justify-content: center;

    @media (max-width: 882px){
        background: #50d404ff;
        display: grid;
        flex-wrap: unset;
        grid-template-columns: repeat(auto-fit, 110px);
        justify-content: center;
        width: 100%;
    }


    @media (max-width: 576px){
        display: none;
    }
`;

/* Nav Link cumple la misma funcion que un a con href */
export const NavLinkStyled = styled(NavLink)`

    //background: #04a3d4ff;

    padding: 10px 20px;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;

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
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: white;
    
    &:hover {
        transition: all .5s;
        border-radius: 5px;
        background:rgb(121, 20, 3);
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    div{
        display: none;
        grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
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
    }

    &:hover div{
        display: grid;
    }

    a{
        border: 1px solid white;
    }
`;

export const MenuContainerStyled = styled(motion.div)`
    display: none;
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

    //background: #0346d8ff;

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
    height: 50px;
    margin: 5px;

    img{
        max-width: 100%;
        max-height: 100%;
    }
    
    @media (max-width: 576px){
        height: 40px;
    }
`;

export const IconNavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;

    @media (max-width: 576px){
    padding: 10px 0px;
    }
`;

export const SearchContainer = styled.div`

    //background: #03d826ff;

    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 5px;
    //border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    min-width: 200px;
    max-width: 700px;

    @media (max-width: 882px){
        max-width: 200px;
    }
    
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

export const LinkContainerStyled = styled.div`    
    font-size: 1.2rem;
    display: flex;
`;