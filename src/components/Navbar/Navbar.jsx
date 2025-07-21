import { HeaderStyled, NavbarStyled, IconsContainerStyled, UserIcon, SearchContainer, SearchBar, SearchIcon, MenuContainerStyled, LogoLinkContainer, NavbarContainerStyled, NavLinkStyled, IconNavLinkStyled, NavLinkContainerStyled, MobileCainerStyled, NavbarMobileContainerStyled, ContainerStyled } from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";
import MenuIcon from "./MenuIcon/MenuIcon"
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesFromApi } from "../../axios/axios-categories";
import { useEffect, useState } from "react";
import typeIcons from "../../utils/setIcon";

export const Navbar = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);
    const [categories, setCategories] = useState([]);

    const fetchAllCategories = async () => {
        try {
            const categoriesList = await getAllCategoriesFromApi();
            setCategories(categoriesList);
            //console.log("Fetched categories:", categoriesList);
        }
        catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    };

    useEffect(() => {
        fetchAllCategories();
    }, []);
    

    return(
        <HeaderStyled>
            <ModalCart/>
            <ModalMenu/>

            <NavbarContainerStyled>
                <ContainerStyled>                    
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <LogoLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </LogoLinkContainer>
                    </motion.div>

                    <SearchContainer>
                        <SearchBar type="text" placeholder="Buscar"/>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <SearchIcon/>
                        </motion.div>
                    </SearchContainer>
                    
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
                <NavbarStyled>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/about">About</NavLinkStyled>
                    <NavLinkStyled to="/products">Products</NavLinkStyled>
                    <NavLinkContainerStyled>
                        Categories
                        <div>
                            {
                                categories.map((category, index) => (
                                    <NavLinkStyled key={ index } to={`/pagecategory/${category.name}`}>
                                        { category.name.charAt(0).toUpperCase() + category.name.slice(1) }
                                        <img src={ typeIcons[category.name] } alt={category.name} />
                                    </NavLinkStyled>
                                ))
                            }
                        </div>
                    </NavLinkContainerStyled>
                    <NavLinkStyled to="/services">Services</NavLinkStyled>
                    <NavLinkStyled to="/contact">Contact</NavLinkStyled>
                </NavbarStyled>
            </NavbarContainerStyled>




            <NavbarMobileContainerStyled>
                <MobileCainerStyled>
                    <MenuContainerStyled
                        whileTap={{ scale: 0.8 }}
                    >
                        <MenuIcon />
                    </MenuContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <LogoLinkContainer to="/">
                            <img src={logo} alt="Logo" />
                        </LogoLinkContainer>
                    </motion.div>
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
                </MobileCainerStyled>
                <SearchContainer>
                    <SearchBar type="text" placeholder="Buscar"/>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <SearchIcon/>
                    </motion.div>
                </SearchContainer>
            </NavbarMobileContainerStyled>


        </HeaderStyled>
    );
};