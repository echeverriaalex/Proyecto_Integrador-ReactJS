import { HeaderStyled, NavbarStyled, IconsContainerStyled, UserIcon, SearchContainer, SearchBar, SearchIcon, ContainerStyled, MenuContainerStyled, LogoLinkContainer, NavbarContainerStyled, NavLinkStyled, IconNavLinkStyled } from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";
import MenuIcon from "./MenuIcon/MenuIcon"
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);

    return(
        <HeaderStyled>
            <ModalCart/>
            <ModalMenu/>
            <NavbarContainerStyled>
                <ContainerStyled>
                    
                    <MenuContainerStyled
                        whileTap={{ scale: 0.8 }}
                    >
                        <MenuIcon />
                        <h2>Menu</h2>
                    </MenuContainerStyled>

                    <motion.div whileTap={{ scale: 0.8 }}>
                        <LogoLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </LogoLinkContainer>
                    </motion.div>

                    <NavbarStyled>
                        <NavLinkStyled to="/">Home</NavLinkStyled>
                        <NavLinkStyled to="/about">About</NavLinkStyled>
                        <NavLinkStyled to="/products">All products</NavLinkStyled>
                        <NavLinkStyled to="/">Categories</NavLinkStyled>
                        <NavLinkStyled to="/services">Services</NavLinkStyled>
                        <NavLinkStyled to="/contact">Contact us</NavLinkStyled>
                    </NavbarStyled>
                    
                    <IconsContainerStyled>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <IconNavLinkStyled to="/login">
                                <UserIcon />
                            </IconNavLinkStyled >
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                        </motion.div>
                    </IconsContainerStyled>

                </ContainerStyled>
                <SearchContainer>
                    <SearchBar type="text" placeholder="Buscar"/>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <SearchIcon/>
                    </motion.div>
                </SearchContainer>
            </NavbarContainerStyled>
        </HeaderStyled>
    );
};