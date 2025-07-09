import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverLayStyled, ContainerStyled, HeadContainerStyled, NavLinkContainerStyled } from "./ModalMenuStyles";
import { toggleMenuHidden } from "../../../redux/menu/menuSlice"
import { CloseIcon, LinksContainerStyled, NavLinkStyled } from "../NavbarStyled";
import { useEffect, useState } from "react";
import { getAllCategoriesFromApi } from "../../../axios/Categories/axios-categories";
import typeIcons from "../../../utils/setIcon";

const ModalMenu = () => {

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

    return (
        <>
            {!hiddenMenu && (
                <ModalOverLayStyled
                    onClick={() => dispatch(toggleMenuHidden())}
                    isHidden={hiddenMenu}
                />
            )}

            <AnimatePresence>
                {!hiddenMenu && (
                    <ContainerStyled
                        initial={{ translateX: -600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="menu-modal"
                    >
                        <HeadContainerStyled
                            className="close_modal"
                            whileTap={{ scale: 0.90 }}
                        >
                            <h2>Menu</h2>
                            <CloseIcon
                                size={50} 
                                color= "white"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleMenuHidden())}
                            />
                        </HeadContainerStyled>

                        <LinksContainerStyled onClick={() => dispatch(toggleMenuHidden())}>
                            <NavLinkStyled to="/">Home</NavLinkStyled>
                            <NavLinkStyled to="/products">All products</NavLinkStyled>
                            <NavLinkContainerStyled onClick={(e) => e.stopPropagation()}>
                                Categories
                                <div>
                                    {
                                        categories.length > 0 ? (
                                            categories.map((category, index) => (
                                                <NavLinkStyled 
                                                    key={ index }
                                                    onClick={() => dispatch(toggleMenuHidden())}
                                                    to={`/pagecategory/${category.name}`}
                                                >
                                                    { category.name.charAt(0).toUpperCase() + category.name.slice(1) }
                                                    <img src={ typeIcons[category.name] } alt={category.name} />
                                                </NavLinkStyled>
                                            ))
                                        )
                                        :(
                                            <p>No categories found.</p>
                                        )
                                    }
                                </div>
                            </NavLinkContainerStyled>
                            <NavLinkStyled to="/about">About</NavLinkStyled>
                            <NavLinkStyled to="/services">Services</NavLinkStyled>
                            <NavLinkStyled to="/contact">Contact Us</NavLinkStyled>                            
                        </LinksContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
       </>
    );
};

export default ModalMenu;