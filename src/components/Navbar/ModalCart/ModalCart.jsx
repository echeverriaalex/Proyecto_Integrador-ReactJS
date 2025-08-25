import { AnimatePresence } from "framer-motion";
import { toggleCartHidden } from "../../../redux/cart/cartSlice";
import { ContainerStyled, EmptyContainerStyled, HeadContainerStyled, LinkCartStyled, MainContainerStyled, ModalOverLayStyled, ProductsCartContainerStyled } from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../../assets/images/cart.png";
import { CloseIcon } from "../NavbarStyled";
import ItemCard from "./Components/ItemCard/ItemCard";

const ModalCart = () => {
    
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    const { cartItems, shippingCost } = useSelector((state) => state.cart);
    
    return (
        <>
            {!hiddenCart && (
                <ModalOverLayStyled
                    onClick={() => dispatch(toggleCartHidden())}
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
                        <HeadContainerStyled onClick={() => dispatch(toggleCartHidden())}>
                            <CloseIcon 
                                size={30} 
                                color= "white"
                                className="close_modal"
                                whileTap={{ scale: 0.90 }}
                            />
                            <LinkCartStyled to="/mycart">Ir al carrito</LinkCartStyled>
                        </HeadContainerStyled>

                        <MainContainerStyled>
                            <ProductsCartContainerStyled>
                                {
                                    cartItems.length
                                        ?(
                                            cartItems.map((item) => (
                                                <ItemCard key={item.id} {...item} />
                                            ))
                                        ) 
                                        :(
                                            <EmptyContainerStyled>
                                                <img src={cart} alt="Cart is empty" />
                                                <p>No hay productos en el carrito</p>
                                            </EmptyContainerStyled>
                                        )
                                }
                            </ProductsCartContainerStyled>

                        </MainContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
}
export default ModalCart;