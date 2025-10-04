import { NavbarStyled, IconsContainerStyled, UserIcon, MenuContainerStyled, LogoLinkContainer, NavbarContainerStyled, NavLinkStyled, NavLinkContainerStyled, ContainerStyled, MobileContainerStyled, IconContainerStyled, SpanStyled, BodyNavContainerStyled, MobileMenuContainerStyled} from "./NavbarStyled"
import logo_pokeworld from "../../assets/images/logo-pokeworld.png";
import { motion } from "framer-motion";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./Components/CartIcon/CartIcon";
import ModalMenu from "./ModalMenu/ModalMenu";
import MenuIcon from "./Components/MenuIcon/MenuIcon"
import { getAllCategoriesFromApi } from "../../axios/axios-categories";
import { useEffect, useState } from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import CategoryCard from "../Categories/CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { formatUserName } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import ModalUser from "./ModalUser/ModalUser";
import { toggleMenuHidden } from "../../redux/users/userSlice";
import logo_pw from "../../assets/images/logo-pw.png";
import ModalMessage from "./ModalMessage/ModalMessage";

export const Navbar = () => {
    
    const [categories, setCategories] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchAllCategories = async () => {
        try {
            const categoriesList = await getAllCategoriesFromApi();
            setCategories(categoriesList);
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
        <NavbarContainerStyled>
            <ModalCart/>
            <ModalMenu/>
            <ModalUser/>
            <ModalMessage/>
            <BodyNavContainerStyled>
                <ContainerStyled>
                    <MenuContainerStyled
                        whileTap={{ scale: 0.8 }}
                    >
                        <MenuIcon />
                    </MenuContainerStyled>
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <LogoLinkContainer to="/">
                            <img src={logo_pokeworld} alt="Logo" />
                        </LogoLinkContainer>
                    </motion.div>
                    <SearchBar/>
                    <IconsContainerStyled>
                        <IconContainerStyled 
                            whileTap={{ scale: 0.8 }}
                            onClick={()=>{
                                currentUser ? dispatch(toggleMenuHidden()) : navigate('/login')
                            }}
                        >
                                <SpanStyled> {currentUser ? formatUserName(currentUser.nombre) : 'Login'}</SpanStyled>
                                <UserIcon />
                        </IconContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
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
                                categories.length > 0 ? (
                                    categories.map((category) => (
                                        <CategoryCard category={category} key={category.name} />
                                    ))
                                ) : (
                                    <SpanStyled>No categories available</SpanStyled>
                                )
                            }
                        </div>
                    </NavLinkContainerStyled>
                    <NavLinkStyled to="/contact">Contact</NavLinkStyled>
                </NavbarStyled>
            </BodyNavContainerStyled>
            <MobileContainerStyled>
                <MobileMenuContainerStyled>
                    <IconsContainerStyled>
                        <MenuContainerStyled
                            whileTap={{ scale: 0.8 }}
                        >
                            <MenuIcon />
                        </MenuContainerStyled>
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <LogoLinkContainer to="/">
                                <img src={logo_pw} alt="Logo" />
                            </LogoLinkContainer>
                        </motion.div>
                    </IconsContainerStyled>
                    <IconsContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}
                            onClick={()=>{
                                currentUser? dispatch(toggleMenuHidden()) : navigate('/login')
                            }}
                        >
                            <SpanStyled>
                                {
                                    currentUser ? formatUserName(currentUser.nombre) : "Login"
                                }
                            </SpanStyled>
                            <UserIcon />
                        </IconContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                        </IconContainerStyled>
                    </IconsContainerStyled>
                </MobileMenuContainerStyled>
                <SearchBar/>
            </MobileContainerStyled>
        </NavbarContainerStyled>
    );
};