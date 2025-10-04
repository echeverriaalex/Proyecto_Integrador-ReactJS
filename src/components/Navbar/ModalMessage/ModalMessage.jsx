import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../NavbarStyled";
import { ContainerStyled, LinkCartStyled, MessageContainerStyled } from "./ModalMessageStyles";
import { useEffect } from "react";
import { toggleMessageShow } from "../../../redux/slice/messageSlice";

const ModalMessage = () => {    
    const dispatch = useDispatch();
    const { visible, message } = useSelector((state) => state.message);

    useEffect(() => {

        if (!visible &&  !message) return;
        const timer = setTimeout(() => { 
            dispatch(toggleMessageShow(visible));
        }, 2000);

        return () => clearTimeout(timer);
    }, [ ]);
    
    return (
        <>
            <AnimatePresence>
                {visible && (
                    <ContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="message-modal"
                    >
                        <MessageContainerStyled>
                            <p>{ message || "No hay mensajes"}</p>
                            <CloseIcon
                                size={30} 
                                color= "white"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleMessageShow())}
                            />
                        </MessageContainerStyled>
                        <LinkCartStyled
                            onClick={() => dispatch(toggleMessageShow())} 
                            to="/mycart"
                        >
                            Ir al carrito
                        </LinkCartStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalMessage;