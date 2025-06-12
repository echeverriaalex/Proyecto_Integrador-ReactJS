import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverLayStyled, ContainerStyled, HeadContainerStyled } from "./ModlaMenuStyles";
import { toggleMenuHidden } from "../../../redux/menu/menuSlice"
import { LinksContainerStyled, NavLinkStyled } from "../NavbarStyled";
import { IoIosCloseCircle } from "react-icons/io";

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
                            onClick={() =>  dispatch(toggleMenuHidden())}
                        >
                            <h2>Menu</h2>
                            <IoIosCloseCircle 
                                size={30} 
                                color= "white"
                                className="close_modal"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleCartHidden())}
                            />
                        </HeadContainerStyled>


                        <LinksContainerStyled>
                            <NavLinkStyled to="/">Home</NavLinkStyled>
                            <NavLinkStyled to="/about">About</NavLinkStyled>
                            <NavLinkStyled to="/services">Services</NavLinkStyled>
                            <NavLinkStyled to="/contact">Contact</NavLinkStyled>
                        </LinksContainerStyled>
                    </ContainerStyled>
                )}


             
            </AnimatePresence>
       </>
    );
};

export default ModalMenu;