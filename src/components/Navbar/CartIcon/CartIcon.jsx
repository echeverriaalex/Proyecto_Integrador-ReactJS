import { useDispatch } from "react-redux";
import { CartIconStyled, LinkContainerStyled } from "../NavbarStyled";
import { toggleCartHidden } from "../../../redux/cart/cartSlice";

const CartIcon = () => {

    const dispatch = useDispatch();

    return (
        
        <LinkContainerStyled onClick={() => dispatch(toggleCartHidden())}>
            <CartIconStyled>
                
            </CartIconStyled>
        </LinkContainerStyled>
    )
}

export default CartIcon;