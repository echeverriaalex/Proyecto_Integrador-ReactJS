import Card from "../Products/Card/Card";
import { useSelector } from "react-redux";
//import { getRandomsPokemonsFromAPI } from "../../../utils/getRandomsPokemons/getRandomsPokemonsFromAPI"
//import { getRandomsPokemonsFromAPI } from "../../../utils/getRandomsPokemons";
 
const Recommended = () => {

    //const recommended = getRandomsPokemonsFromAPI(10);
    const { recommended } = useSelector((state) => state.recommended)
    return(
        <>
            {
                recommended.map( (item) => {
                    <Card
                        key = {item.id}
                        id = {item.id}
                        name = {item.name}
                        sprites = {item.sprites}
                        weigth ={ item.weight }
                        types = {item.types}
                    />
                })                
            }
        </>
    )
}

export default Recommended;