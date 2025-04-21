import styled from "styled-components";


import { HiMenu   } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";


import { IoHomeSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export const MenuIcon = styled(HiMenu)`
    font-size: 2rem;
    color: white;
    cursor: pointer;
`;

export const UserIcon = styled(HiUser)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
`;


export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 70px;    
    /*background: #ac12c0;
    background: transparent;*/
    border-bottom: 1px solid white;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 0;
    }
`;

export const NavbarContainerStyled = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 1rem 3rem;
    
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        padding: 0px 15px;
        gap: 30px;
    }
`;

export const LogoContainerStyled = styled.div`
    a{
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 8px 20px;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    p{
        color: white;
        font-size: 1.4rem;
        font-family: "Didact Gothic", sans-serif;
        font-weight: 800;
    }


    @media (max-width: 576px){
        a{
            padding: 0px;
            gap: 10px;
            display: flex;
            height: 60px;
        }

        img{
            height: 50%;
        }

        p{
            /* font-size: 0.6rem; */
        }
       
    }
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

export const LinkContainerStyled = styled.div`
    font-size: 0.7rem;
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
    display: flex;
    align-items: center;
    border: 1px solid black;
    font-family: "Didact Gothic", sans-serif;
    font-weight: 500;
    cursor: pointer;
    border-radius: 8px;
    a{  
        padding: 8px 35px;
        text-align: center;
    }

    @media (max-width: 768px){
        padding: 1rem 2rem;
    }

    @media (max-width: 576px){
        font-size: 12px;
        padding: 0px;
        /*border: 1px solid blue;*/
        
        a{
            /*color: yellow;*/
            font-size: 12px;
            padding: 5px 8px;
        }
       
    }
`;

export const UserContainerStyled = styled(LinkContainerStyled)` `;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px){
        display: none;
    }
`


export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;