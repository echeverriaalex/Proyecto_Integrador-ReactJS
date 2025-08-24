import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../../../redux/cart/cartUtils";
import { IconQuantityContainerStyled, QuantityContainerStyled } from "./QuantityStyles";

const Quantity = ( { quantity, id } ) => {
    
    const { cartItems } = useSelector((state) => state.cart) || { cartItems: [] };
    const dispatch = useDispatch();

    return (
        <QuantityContainerStyled>
            <IconQuantityContainerStyled
                whileTap={{ scale: 0.90 }}
                onClick={() => dispatch(removeItemFromCart(cartItems, id))}
            >
                <span> - </span>
            </IconQuantityContainerStyled>
            <p>{ quantity }</p>
            <IconQuantityContainerStyled 
                whileTap={{ scale: 0.90 }}
                onClick={() => dispatch(addItemToCart(cartItems, id ))}
            >
                <span> + </span>
            </IconQuantityContainerStyled>
        </QuantityContainerStyled>
    );
};

export default Quantity;