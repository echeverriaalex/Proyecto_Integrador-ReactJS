import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { RecommendedContainerStyled } from "./RecommendedStyles"
//import { getRandomsPokemonsFromAPI } from "../../../utils/getRandomsPokemons/getRandomsPokemonsFromAPI"
//import { getRandomsPokemonsFromAPI } from "../../../utils/getRandomsPokemons";
 
const Recommended = () => {

    //const recommended = getRandomsPokemonsFromAPI(10);
    const { recommended } = useSelector((state) => state.recommended)

    return(
        <>
            <RecommendedContainerStyled>
                {
                    recommended.map((item) => (
                        <Card
                            key = {item.id}
                            id = {item.id}
                            name = {item.name}
                            sprites = {item.sprites}
                            weigth ={ item.weight }
                            types = {item.types}
                        />
                    ))
                }
            </RecommendedContainerStyled>
        </>
    )
}

export default Recommended;