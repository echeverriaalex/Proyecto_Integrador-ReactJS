import { AnimatePresence } from "framer-motion";
import { clearCart, removeFromCart, toggleCartHidden } from "../../../redux/cart/cartSlice";
import { ButtonContainerStyled, CardCartStyled, CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, DataContainerStyled, Increase, MainContainerStyled, ModalOverLayStyled, ProductsCartContainerStyled, TitleStyled, TotalContainerStyled } from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";

import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";

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
                    onclick={() => dispatch(toggleCartHidden())}
                    isHidden={hiddenCart}
                />
            )}

            <AnimatePresence>
                {!hiddenCart && (
                    <ContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 60 }}
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
                                <IoIosCloseCircle size={20} />
                                <h2>Cerrar</h2>
                            </CloseButtonStyled>
                        </CloseButtonContainerStyled>

                        <MainContainerStyled>
                            <TitleStyled>
                                <h2>Tus productos</h2>
                                <Increase
                                    onClick={() => dispatch(clearCart())}
                                    bgColor="red"
                                    disabled="true"
                                >
                                    
                                </Increase>
                            </TitleStyled>

                            <ProductsCartContainerStyled>
                                {cartItems.length === 0 ? (
                                    <p>No hay productos en el carrito</p>
                                ) : (
                                    cartItems.map((item) => (
                                        <CardCartStyled key={item.id} className="cart-item">
                                                <img src={item.image} alt={item.name} />
                                                <div className="cart-item-details">
                                                    <h3>{item.name}</h3>
                                                    <p>Precio: ${item.price}</p>
                                                    <p>Cantidad: {item.quantity}</p>
                                                </div>
                                                <button
                                                    onClick={() => dispatch(removeFromCart(item))}
                                                >
                                                    Eliminar
                                                </button>
                                        </CardCartStyled>
                                    ))
                                )}
                            </ProductsCartContainerStyled>

                        </MainContainerStyled>

                        <TotalContainerStyled>

                            <DataContainerStyled>
                                <p>Subtotal:</p>
                                <p> $ 1400 </p>
                            </DataContainerStyled>

                            <DataContainerStyled>
                                <p>Services:</p>
                                <p> $ 200 </p>
                            </DataContainerStyled>

                            <DataContainerStyled>
                                <p>Total:</p>
                                <p> $ 1600 </p>
                            </DataContainerStyled>
                            
                            
                        </TotalContainerStyled>


                        <ButtonContainerStyled>
                            <Button
                                background = "blue"
                                onClick={()=> dispatch(clearCart())}
                            >
                                Vaciar carrito
                                <FaTrashAlt />
                            </Button>
                            <Button
                                background = "yellow"
                            >
                                Finalizar compra
                            </Button>
                        </ButtonContainerStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </>
    );
}
export default ModalCart;