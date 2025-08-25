import Quantity from "../Quantity/Quantity";
import { ButtonsContainerStyled, CardCartStyled, DetailsItemContainerStyled } from "./ItemCardStyles";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Button from "../../../../UI/Button/Button";
import { deleteItem } from "../../../../../redux/cart/cartSlice";

const ItemCard = ({ id, name, image, quantity, price }) => {

    const dispatch = useDispatch();

    return (
        <CardCartStyled key={id}>
            <img src={image} alt={name} />
            <DetailsItemContainerStyled>
                <h3>{name}</h3>
                <p>$ { (quantity * price)?.toFixed(2) }</p>
                <ButtonsContainerStyled>
                    <Quantity product={{ id, name, image, quantity, price }} />
                    <Button
                        onClick={() => dispatch(deleteItem(id))}
                        background = "#a81106"
                    >
                        <FaTrashAlt />
                    </Button>
                </ButtonsContainerStyled>
            </DetailsItemContainerStyled>
        </CardCartStyled>
    );
};

export default ItemCard;