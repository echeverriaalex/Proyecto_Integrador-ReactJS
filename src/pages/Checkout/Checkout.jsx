import { useSelector } from "react-redux";
import { CardContainerStyled, CheckoutWrapper, ImageContainerStyled, ProductsContainerStyled } from "./CheckoutStyles";

const Checkout = () => {

    const { cartItems, shippingCost } = useSelector((state) => state.cart);

    console.log("Cart Items in Checkout:", cartItems);
    


    return (
        <CheckoutWrapper>
            <h2>En check</h2>
            <ProductsContainerStyled>
                {
                    cartItems.map((item) => (
                        <CardContainerStyled key={item.id}>

                            <ImageContainerStyled>
                                <img src={item.image} alt={item.name} />
                            </ImageContainerStyled>


                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </CardContainerStyled>
                    ))
                }
            </ProductsContainerStyled>
        </CheckoutWrapper>
    );
};

export default Checkout;