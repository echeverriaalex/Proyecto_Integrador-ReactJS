import { NavbarStyled, IconsContainerStyled, UserIcon, MenuContainerStyled, LogoLinkContainer, NavbarContainerStyled, NavLinkStyled, IconNavLinkStyled, 
    NavLinkContainerStyled, ContainerStyled, MobileContainerStyled, 
    IconContainerStyled, 
    SpanStyled,
    BodyNavContainerStyled,
    MobileMenuContainerStyled} from "./NavbarStyled"
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
import { toggleHiddenMenu } from "../../redux/users/userSlice";
import logo_pw from "../../assets/images/logo-pw.png";
import logo_pokemon from "../../assets/images/Pokemon_logo.png";

export const Navbar = () => {
    
    const [categories, setCategories] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    currentUser? console.log("Current User in Navbar:", currentUser) : console.log("No user logged in");

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
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <IconNavLinkStyled onClick={()=>{
                                currentUser? dispatch(toggleHiddenMenu()) : navigate('/login')
                            }}>
                                <SpanStyled>
                                    {
                                        currentUser ? formatUserName(currentUser.nombre) : "Login"
                                    }
                                </SpanStyled>
                                <UserIcon />
                            </IconNavLinkStyled >
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
                                    categories.map((category, index) => (
                                        <CategoryCard category={category} key={index} />
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
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <IconNavLinkStyled onClick={()=>{
                                currentUser? dispatch(toggleHiddenMenu()) : navigate('/login')
                            }}>
                                <SpanStyled>
                                    {
                                        currentUser ? formatUserName(currentUser.nombre) : "Login"
                                    }
                                </SpanStyled>
                                <UserIcon />
                            </IconNavLinkStyled >
                        </IconContainerStyled>
                        <IconContainerStyled whileTap={{ scale: 0.8 }}>
                            <CartIcon/>
                        </IconContainerStyled>
                    </IconsContainerStyled>
                </MobileMenuContainerStyled>


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
            </MobileContainerStyled>


            

        </NavbarContainerStyled>
    );
};