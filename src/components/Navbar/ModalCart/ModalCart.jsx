import { AnimatePresence } from "framer-motion";
import { toggleCartHidden } from "../../../redux/cart/cartSlice";
import { CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, Increase, MainContainerStyled, ModalOverLayStyled, TitleStyled } from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";

import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ModalCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    const { cartItems, shippingCost } = useSelector((state) => state.cart);
    

    return (
        <>
            {!hiddenCart && (
                <ModalOverLayStyled
                    onclick={() => dispatch(toggleCartHidden())}
                    isHidden={hiddenCart}
                />
            )}

            <AnimatePresence>
                {!hiddenCart && (
                    <ContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: "spring", damping: 27 }}
                        key="cart-modal"
                    >
                        <CloseButtonContainerStyled>
                            <CloseButtonStyled
                                className="close_modal"
                                whileTap={{ scale: 0.90 }}
                                onClick={() => dispatch(toggleCartHidden())}
                            >
                                <IoIosCloseCircle size={40} />
                                <h2>Cerrar</h2>
                            </CloseButtonStyled>
                        </CloseButtonContainerStyled>

                        <MainContainerStyled>
                            <TitleStyled>
                                <h2>Tus productos</h2>
                                <Increase
                                    onclick={(e) => e.preventDefault()}
                                    bgColor="red"
                                    disabled="true"
                                >
                                    <FaTrashAlt />
                                </Increase>
                            </TitleStyled>
                        </MainContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
}
export default ModalCart;