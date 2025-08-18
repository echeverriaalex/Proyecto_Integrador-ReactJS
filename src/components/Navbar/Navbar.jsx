import { HeaderStyled, NavbarStyled, IconsContainerStyled, UserIcon, MenuContainerStyled, LogoLinkContainer, NavbarContainerStyled, NavLinkStyled, IconNavLinkStyled, 
    NavLinkContainerStyled, NavbarMobileContainerStyled, ContainerStyled, MobileContainerStyled, 
    IconContainerStyled} from "./NavbarStyled"
import logo from "../../assets/images/Pokemon_logo.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";
import MenuIcon from "./MenuIcon/MenuIcon"
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesFromApi } from "../../axios/axios-categories";
import { useEffect, useState } from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import CategoryCard from "../Categories/CategoryCard/CategoryCard";

export const Navbar = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);
    const { cartItems } = useSelector((state) => state.cart);
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
                    <SearchBar/>
                    <IconsContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <IconNavLinkStyled to="/login">
                                <UserIcon />
                            </IconNavLinkStyled >
                        </IconContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                            <p>{cartItems.length}</p>
                        </IconContainerStyled>
                    </IconsContainerStyled>
                </ContainerStyled>
                <NavbarStyled>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/about">About</NavLinkStyled>
                    <NavLinkStyled to="/products">Products</NavLinkStyled>
                    <NavLinkContainerStyled>
                        <p>Categories</p>
                        <div>
                            {
                                categories.map((category, index) => (
                                    <CategoryCard category={category} key={index} />
                                ))
                            }
                        </div>
                    </NavLinkContainerStyled>
                    <NavLinkStyled to="/contact">Contact</NavLinkStyled>
                </NavbarStyled>
            </NavbarContainerStyled>




            <NavbarMobileContainerStyled>
                <MobileContainerStyled>
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
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <IconNavLinkStyled to="/login">
                                <UserIcon />
                            </IconNavLinkStyled >
                        </IconContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                            <p>{cartItems.length}</p>
                        </IconContainerStyled>
                    </IconsContainerStyled>
                </MobileContainerStyled>

                <SearchBar/>

                { /*
                <SearchContainer>
                    <SearchBar type="text" placeholder="Buscar"/>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <SearchIcon/>
                    </motion.div>
                </SearchContainer>
                
                </SearchContainer>
                */ }
            </NavbarMobileContainerStyled>


        </HeaderStyled>
    );
};