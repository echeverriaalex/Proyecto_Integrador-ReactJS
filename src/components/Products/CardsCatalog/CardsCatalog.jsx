import { forwardRef } from "react";
import Card from "../Card/Card";
import { CardsCatalogStyled } from "./CardsCatalogStyle";

const CardsCatalog = forwardRef(({ productsList }, ref) => {
    return(
        <CardsCatalogStyled ref={ref}>
            {   
                productsList.map((item) => (
                    <Card
                        key = {item.id}
                        id = {item.id}
                        name = {item.name}
                        sprites = {item.sprites}
                        weigth ={ item.weight }
                        types = {item.types}
                        height = { item.height }
                        stats = { item.stats }
                    /> 
                ))
            }
        </CardsCatalogStyled>
    )
});

export default CardsCatalog;