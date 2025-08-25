import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../../../redux/cart/cartSlice";
import { CartIconStyled, IconContainerStyled } from "../IconStyles";

const CartIcon = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <IconContainerStyled onClick={() => dispatch(toggleCartHidden())}>
            <CartIconStyled />
            <p>{cartItems.length}</p>
        </IconContainerStyled>
    )
}

export default CartIcon;