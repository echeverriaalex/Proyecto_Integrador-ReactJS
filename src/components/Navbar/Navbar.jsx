import { HeaderStyled, LinksContainerStyled, LogoContainerStyled, NavbarContainerStyled, UserContainerStyled } from "./NavbarStyled"

import logo from "../../assets/images/logo.png"

export const Navbar = () => {
    return(

        <HeaderStyled>
            <NavbarContainerStyled>
                <LogoContainerStyled>
                    <img src={logo} alt="Logo" />
                </LogoContainerStyled>


                <LinksContainerStyled>                
                    <a href="/">Home</a>
                    <a href="/about">About</a>

                    <UserContainerStyled home>
                        user
                    </UserContainerStyled>
                </LinksContainerStyled>
            </NavbarContainerStyled>
        </HeaderStyled>
    )
}