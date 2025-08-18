import  { calculateProductPrice } from "../../../../../utils/setPricePokemonByType"
import { PriceContainerStyled } from "./PriceContainerStyles";

const PriceContainer = ({ price }) => {

    const finalPrice = Number(price);

    return (
        <PriceContainerStyled>
            <h3>${ finalPrice.toFixed(2)}</h3>
        </PriceContainerStyled>
    );
}

export default PriceContainer;