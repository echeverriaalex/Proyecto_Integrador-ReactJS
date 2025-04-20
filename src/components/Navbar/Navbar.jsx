import { HeaderStyled, LinkContainerStyled, LinksContainerStyled, LogoContainerStyled, NavbarContainerStyled, UserContainerStyled } from "./NavbarStyled"

import logo from "../../assets/images/logo_rayo.png"
import { IoHomeSharp } from "react-icons/io5";

export const Navbar = () => {
    return(
        <HeaderStyled>
            <NavbarContainerStyled>
                <LogoContainerStyled>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                        <p>Thunderbolt</p>
                    </a>
                </LogoContainerStyled>
                <LinksContainerStyled>
                    <LinkContainerStyled>
                        <a href="/">Iniciar sesión</a>
                    </LinkContainerStyled>
                </LinksContainerStyled>
            </NavbarContainerStyled>
        </HeaderStyled>
    )
}