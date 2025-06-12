import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ContainerStyled, HeadContainerStyled } from "./ModlaMenuStyles";

const ModalMenu = () => {

    const dispatch = useDispatch();
    const hiddenMenu = useSelector((state) => state.menu.hidden);

    return (
        <>
            {!hiddenMenu && (
                <ModalOveerlayStyled 
                    onClick={() => dispatch(toggleMenuHidden())}
                    isHidden={hiddenMenu}
                />
            )}

            <AnimatePresence>
                {!hiddenMenu && (
                    <ContainerStyled
                        initial={{ translateX: 1600 }}
                        animate={{ translateX: 400 }}
                        exit={{ translateX: 1600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="menu-modal"
                    >
                        <HeadContainerStyled>
                            <IoIosCloseCircle 
                                size={30} 
                                color="white"
                                className="close_modal"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleMenuHidden())}
                            />
                            <h2>Menu</h2>
                        </HeadContainerStyled>



                        <div className="modal-menu">
                            <h2>Menu</h2>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </ContainerStyled>
                )}


             
            </AnimatePresence>
       </>
    );
};

export default ModalMenu;