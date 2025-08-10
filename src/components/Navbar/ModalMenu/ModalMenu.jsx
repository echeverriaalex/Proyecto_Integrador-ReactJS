import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverLayStyled, ContainerStyled, HeadContainerStyled, NavLinkContainerStyled, NavLinkMobileStyled } from "./ModalMenuStyles";
import { toggleMenuHidden } from "../../../redux/menu/menuSlice"
import { CloseIcon, LinksContainerStyled } from "../NavbarStyled";
import { useEffect, useState } from "react";
import { getAllCategoriesFromApi } from "../../../axios/axios-categories";
import typeIcons from "../../../utils/setIcon";
import CategoryCard from "../../Categories/CategoryCard/CategoryCard";

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
                            <NavLinkMobileStyled to="/">Home</NavLinkMobileStyled>
                            <NavLinkMobileStyled to="/products">Products</NavLinkMobileStyled>
                            <NavLinkContainerStyled onClick={(e) => e.stopPropagation()}>
                                Categories
                                <div onClick={() => dispatch(toggleMenuHidden())}>
                                    {
                                        categories.length > 0 ? (
                                            categories.map((category, index) => (
                                                <CategoryCard category={category} key={index} />
                                            ))
                                        )
                                        :(
                                            <p>No categories found.</p>
                                        )
                                    }
                                </div>
                            </NavLinkContainerStyled>
                            <NavLinkMobileStyled to="/about">About</NavLinkMobileStyled>
                            <NavLinkMobileStyled to="/contact">Contact</NavLinkMobileStyled>                            
                        </LinksContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
       </>
    );
};

export default ModalMenu;