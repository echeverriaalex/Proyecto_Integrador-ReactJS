import styled from "styled-components";
import { HiMenu   } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const SearchIcon = styled(HiOutlineSearch)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    margin: 0px 10px;
    user-select: none;
`;

export const MenuIcon = styled(HiMenu)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
`;

export const UserIcon = styled(HiUser)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    min-width: 50px;
    user-select: none;
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    margin: 0px 10px;
    user-select: none;
`;


export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 5px;
    background:#a01c05;
    border-bottom: 1px solid white;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 8px;
    }
`;

export const NavbarStyled = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    /*padding: 1rem 3rem;*/;
    
    @media (max-width: 768px){
        /*padding: 1rem 2rem;*/
    }

    @media (max-width: 576px){
        padding: 5px;
        gap: 30px;
    }
`;

export const ContainerStyled = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 5px;
    /*background: lightblue;*/

    @media (max-width: 576px){
        gap: 10px;
    }
`;

/* Nav Link cumple la misma funcion que un a con href */
export const NavLinkContainer = styled(NavLink)`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        max-width: 100%;
        max-height: 100%;
    }
    
    @media (max-width: 576px){
        height: 40px;
    }
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
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 10px;
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    padding: 0px 10px;
    a{
        font-size: 1.2rem;
        color: white;
        padding: 1rem 1.5rem;
    }

    @media (max-width: 576px){
        /*background: lightcoral;*/
        padding: 0px;
    }
`;