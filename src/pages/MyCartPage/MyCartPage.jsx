import { useDispatch, useSelector } from "react-redux";
import { ButtonContainerStyled, CartContainerStyled, CartItemContainerStyled, CartItemsContainerStyled, CartProcessContainerStyled, DescriptionTotalContainerStyled, EmptyCartContainerStyled, IdentityContainerStyled, ImageContainerStyled, ItemDetailsContainerStyled, MycartPageWrapper, NavLinkContainerStyled, NavLinksContainerStyled, PriceContainerStyled, PriceQuantityContainerStyled, TextContainerStyled, TotalContainerStyled } from "./MyCartPageStyles";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import { clearCart, deleteItem, removeFromCart, toggleCartHidden } from "../../redux/cart/cartSlice";
//import { addItemToCart, removeItemFromCart } from "../../redux/cart/cartUtils";
//import { IconQuantityContainerStyled, QuantityContainerStyled } from "../../components/Navbar/ModalCart/Components/Quantity/QuantityStyles";
import Quantity from "../../components/Navbar/ModalCart/Components/Quantity/Quantity";
import { useNavigate } from "react-router-dom";
import { totalPrice } from "../../utils/functions";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";

const MyCartPage = () => {

    const { cartItems, shippingCost } = useSelector((state) => state.cart) || { cartItems: [] };
    const cartTotalPrice = totalPrice(cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <MycartPageWrapper>
            {cartItems.length > 0 ? (
                <CartProcessContainerStyled>
                    <CheckoutForm
                        cartItems={cartItems}
                        shippingCost={shippingCost}
                        price={cartTotalPrice}
                    />
                    <CartContainerStyled>
                        <Button 
                            onClick={() => dispatch(clearCart())}
                            maxWidth="180px"
                            background="#a81106"
                        >
                            Clear cart
                            <FaTrashAlt />
                        </Button>
                        <CartItemsContainerStyled>
                            {
                                cartItems.map((item) => (
                                    <CartItemContainerStyled key={item.id}>
                                        <ItemDetailsContainerStyled >
                                            <IdentityContainerStyled>
                                                <ImageContainerStyled>
                                                    <img src={item.img} alt={item.title} />
                                                </ImageContainerStyled>                                            
                                                <TextContainerStyled>
                                                    <h3>{ item.title?.toUpperCase() }</h3>
                                                </TextContainerStyled>
                                            </IdentityContainerStyled>                                            
                                        </ItemDetailsContainerStyled>
                                        <PriceContainerStyled>
                                            <PriceQuantityContainerStyled>
                                                <Quantity product={{ ...item }} />
                                                <Button
                                                    onClick={() => dispatch(deleteItem(item.id))}
                                                    background = "#a81106"
                                                >
                                                    <FaTrashAlt />
                                                </Button>
                                            </PriceQuantityContainerStyled>
                                            <p>$ { (item.price)?.toFixed(2) }</p>
                                        </PriceContainerStyled>
                                    </CartItemContainerStyled>
                                ))
                            }
                        </CartItemsContainerStyled>
                        <TotalContainerStyled>
                            <DescriptionTotalContainerStyled>
                                <span>Total: </span>
                                <span>$ { (cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost).toFixed(2) }</span>
                            </DescriptionTotalContainerStyled>

                            { /*
                            <ButtonContainerStyled>
                                <Button
                                    onClick={()=> dispatch(clearCart())}
                                    background = "#a81106"
                                >
                                    Vaciar
                                    <FaTrashAlt />
                                </Button>
                                <Button
                                    onClick={() => {
                                        dispatch(toggleCartHidden());
                                        navigate("/checkout");
                                    }}
                                    background = "#0f78a8"
                                >
                                    Finalizar
                                </Button>
                            </ButtonContainerStyled>
                            */ }
                        </TotalContainerStyled>
                    </CartContainerStyled>
                </CartProcessContainerStyled>
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