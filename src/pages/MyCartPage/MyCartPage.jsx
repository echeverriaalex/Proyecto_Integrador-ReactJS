import { useDispatch, useSelector } from "react-redux";
import { ButtonContainerStyled, CartContainerStyled, CartItemContainerStyled, CartItemsContainerStyled, DescriptionTotalContainerStyled, EmptyCartContainerStyled, IconQuantityContainerStyled, IdentityContainerStyled, ItemDetailsContainerStyled, MycartPageWrapper, NavLinkContainerStyled, NavLinksContainerStyled, PriceContainerStyled, PriceQuantityContainerStyled, QuantityContainerStyled, TextContainerStyled, TotalContainerStyled } from "./MyCartPageStyles";

import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import { clearCart, removeFromCart, toggleCartHidden } from "../../redux/cart/cartSlice";
import { addItemToCart, removeItemFromCart } from "../../redux/cart/cartUtils";

import { motion } from "framer-motion";

const MyCartPage = () => {

    const { cartItems, shippingCost,  } = useSelector((state) => state.cart) || { cartItems: [] };
    const dispatch = useDispatch();

    return (
        <MycartPageWrapper>
            {cartItems.length > 0 ? (
                <CartContainerStyled>
                    <CartItemsContainerStyled>
                        {
                            cartItems.map((item) => (
                                <CartItemContainerStyled key={item.id}>
                                    <ItemDetailsContainerStyled >
                                        <IdentityContainerStyled>
                                            <img src={item.image} alt="Product" />
                                            <TextContainerStyled>
                                                <h3>{ item.name.toUpperCase() }</h3>
                                            </TextContainerStyled>
                                        </IdentityContainerStyled>
                                        <Button background="#a81106">Delete</Button>
                                    </ItemDetailsContainerStyled>
                                    <PriceQuantityContainerStyled>
                                        <QuantityContainerStyled>
                                            <IconQuantityContainerStyled whileTap={{ scale: 0.90 }} onClick={() => dispatch(removeItemFromCart(item))}>
                                                <span> - </span>
                                            </IconQuantityContainerStyled>
                                            <p>{ item.quantity }</p>
                                            <IconQuantityContainerStyled whileTap={{ scale: 0.90 }} onClick={() => dispatch(addItemToCart(item))}>
                                                <span> + </span>
                                            </IconQuantityContainerStyled>
                                        </QuantityContainerStyled>
                                        <PriceContainerStyled>
                                            <p>$ { (item.price).toFixed(2) }</p>
                                        </PriceContainerStyled>
                                    </PriceQuantityContainerStyled>
                                </CartItemContainerStyled>
                            ))
                        }
                    </CartItemsContainerStyled>
                    <TotalContainerStyled>
                        <DescriptionTotalContainerStyled>
                            <span>Total: </span>
                            <span>$ { (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost).toFixed(2) }</span>
                        </DescriptionTotalContainerStyled>
                        <ButtonContainerStyled>
                            <Button
                                onClick={()=> dispatch(clearCart())}
                                background = "#a81106"
                            >
                                Vaciar carrito
                                <FaTrashAlt />
                            </Button>
                            <Button
                                onClick={() => {
                                    dispatch(toggleCartHidden());
                                    navigate("/checkout");
                                }}
                                background = "#0f78a8"
                            >
                                Finalizar compra
                            </Button>
                        </ButtonContainerStyled>
                    </TotalContainerStyled>
                </CartContainerStyled>
            ) : (
                <EmptyCartContainerStyled>
                    <h2>Your shopping cart is empty.</h2>
                    <NavLinksContainerStyled>
                        <NavLinkContainerStyled to="/products">
                            Choose products
                        </NavLinkContainerStyled>
                        <NavLinkContainerStyled to="/">
                            Explore categories
                        </NavLinkContainerStyled>
                    </NavLinksContainerStyled>
                </EmptyCartContainerStyled>
            )}
        </MycartPageWrapper>
    );
};

export default MyCartPage;