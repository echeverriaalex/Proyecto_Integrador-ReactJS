import { HeaderStyled, NavbarStyled,  MenuIcon, NavLinkContainer, UserIcon, SearchContainer, SearchBar, SearchIcon, OtherContainerStyled} from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png"
import { motion } from "framer-motion"

import ModalCart from "./ModalCart/ModalCart"
import CartIcon from "./CartIcon/CartIcon"



export const Navbar = () => {
    return(
        <HeaderStyled>
            <ModalCart/>
            <NavbarStyled>
                <OtherContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <MenuIcon />
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <NavLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </NavLinkContainer>
                    </motion.div>
                </OtherContainerStyled>

                <SearchContainer>
                    <SearchBar type="text" placeholder="Buscar"/>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <SearchIcon/>
                    </motion.div>
                </SearchContainer>

                <OtherContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <NavLinkContainer to="/login">
                            <UserIcon/>
                        </NavLinkContainer>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <CartIcon/>
                    </motion.div>
                </OtherContainerStyled>
            </NavbarStyled>
        </HeaderStyled>
    )
}