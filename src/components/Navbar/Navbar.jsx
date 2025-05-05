import { 
    HeaderStyled,
    NavbarStyled,
    ContainerStyled,
    MenuIcon,
    NavLinkContainer,
    UserIcon,
    CartIcon,
    SearchContainer,
    SearchBar,
    SearchIcon
    } from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png"
import { motion } from "framer-motion"

export const Navbar = () => {
    return(
        <HeaderStyled>
            <NavbarStyled>
                <ContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <MenuIcon />
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <NavLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </NavLinkContainer>
                    </motion.div>
                </ContainerStyled>
                <ContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <NavLinkContainer to="/login">
                            <UserIcon/>
                        </NavLinkContainer>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <CartIcon/>
                    </motion.div>
                </ContainerStyled>
            </NavbarStyled>
            <SearchContainer>
                <SearchBar type="text" placeholder="Buscar"/>
                <motion.div whileTap={{ scale: 0.8 }}>
                    <SearchIcon/>
                </motion.div>
            </SearchContainer>
        </HeaderStyled>
    )
}