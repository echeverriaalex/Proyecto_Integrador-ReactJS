import { HeaderStyled, NavbarStyled,  MenuIconStyled, IconsContainerStyled, UserIcon, SearchContainer, SearchBar, SearchIcon, ContainerStyled, MenuContainerStyled, NavLinkStyled, LogoLinkContainer} from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";
import MenuIcon from "./MenuIcon/MenuIcon"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/menu/menuSlice"

export const Navbar = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);



    return(
        <HeaderStyled>
            <ModalCart/>
            <ModalMenu/>
            <NavbarStyled>
                <ContainerStyled>
                    <MenuContainerStyled
                        whileTap={{ scale: 0.8 }}
                        onClick={() => dispatch(toggleMenuHidden())}
                    >
                        <MenuIcon />
                        <h2>Menu</h2>
                    </MenuContainerStyled>

                    <motion.div whileTap={{ scale: 0.8 }}>
                        <LogoLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </LogoLinkContainer>
                    </motion.div>

                    <IconsContainerStyled>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <NavLinkStyled  to="/login">
                                <UserIcon/>
                            </NavLinkStyled >
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
            </NavbarStyled>
        </HeaderStyled>
    );
};