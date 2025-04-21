import { CartIcon, HeaderStyled, IconContainer, LinkContainerStyled, LinksContainerStyled, LogoContainerStyled, MenuIcon, NavbarContainerStyled, UserContainerStyled, UserIcon } from "./NavbarStyled"

import logo from "../../assets/images/logo_rayo.png"

/*
import { HiMenuAlt2 } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
*/


export const Navbar = () => {
    return(
        <HeaderStyled>
            <NavbarContainerStyled>
                <IconContainer>
                    <MenuIcon/>
                </IconContainer>

                <LogoContainerStyled>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                        <p>Thunderbolt</p>
                    </a>
                </LogoContainerStyled>

                <IconContainer>
                    <UserIcon/>
                    <CartIcon/>
                </IconContainer>
            </NavbarContainerStyled>
        </HeaderStyled>
    )
}