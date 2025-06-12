import { HeaderStyled, NavbarStyled,  MenuIcon, NavLinkContainer, UserIcon, SearchContainer, SearchBar, SearchIcon, ContainerStyled, MenuContainerStyled} from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";

export const Navbar = () => {
    return(
        <HeaderStyled>
            <ModalCart/>
            <ModalMenu/>
            <NavbarStyled>
                <ContainerStyled>
                    <MenuContainerStyled whileTap={{ scale: 0.8 }}>
                        <MenuIcon />
                        <h2>Menu</h2>
                    </MenuContainerStyled>

                    <motion.div whileTap={{ scale: 0.8 }}>
                        <NavLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </NavLinkContainer>
                    </motion.div>

                    <MenuContainerStyled>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <NavLinkContainer to="/login">
                                <UserIcon/>
                            </NavLinkContainer>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                        </motion.div>
                    </MenuContainerStyled>

                </ContainerStyled>
                <SearchContainer>
                    <SearchBar type="text" placeholder="Buscar"/>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <SearchIcon/>
                    </motion.div>
                </SearchContainer>
            </NavbarStyled>
        </HeaderStyled>
    );
};