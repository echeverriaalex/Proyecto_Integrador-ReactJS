import { AnimatePresence } from "framer-motion";
import { clearCart, removeFromCart, toggleCartHidden } from "../../../redux/cart/cartSlice";
import { CardCartStyled, ContainerStyled, EmptyContainerStyled, HeadContainerStyled, LinkCartStyled, MainContainerStyled, ModalOverLayStyled, ProductsCartContainerStyled, TotalContainerStyled } from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../../assets/images/cart.png";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { CloseIcon } from "../NavbarStyled";

const ModalCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state) => state.cart.hidden);
    const { cartItems, shippingCost } = useSelector((state) => state.cart);
    

    //console.log("Cart Items:", cartItems);
    

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
                                {cartItems.length === 0 ? (
                                    <EmptyContainerStyled>
                                        <img src={cart} alt="Cart is empty" />
                                        <p>No hay productos en el carrito</p>
                                    </EmptyContainerStyled>
                                    
                                ) :
                                (
                                    cartItems.map((item) => (
                                        <CardCartStyled key={item.id} className="cart-item">
                                                <img src={item.image} alt={item.name} />
                                                <div className="cart-item-details">
                                                    <h3>{item.name}</h3>
                                                    <p>Precio unidad: ${item.price}</p>
                                                    <p>Cantidades: {item.quantity}</p>
                                                    <p>Total: $ {item.quantity * item.price }</p>
                                                </div>
                                                <Button
                                                    onClick={() => dispatch(removeFromCart(item))}
                                                    background = "#a81106"
                                                >
                                                    <FaTrashAlt />
                                                </Button>
                                        </CardCartStyled>
                                    ))
                                )}
                            </ProductsCartContainerStyled>

                        </MainContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
}
export default ModalCart;