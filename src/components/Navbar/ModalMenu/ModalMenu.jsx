import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverLayStyled, ContainerStyled, HeadContainerStyled } from "./ModlaMenuStyles";
import { toggleMenuHidden } from "../../../redux/menu/menuSlice"
import { CloseIcon, LinksContainerStyled, NavLinkStyled } from "../NavbarStyled";

const ModalMenu = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);

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