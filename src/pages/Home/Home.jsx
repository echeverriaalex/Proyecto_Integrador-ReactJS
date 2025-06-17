
import { HomeWrapper, ProductsWrapper } from "./HomeStyles"
import Hero from "../../components/Hero/Hero"
import CardsContainer from "../../components/Products/CardsContainer/CardsContainer";
import Recommended from "../../components/Recommended/Recommended";


const Home = () => {
    return (
        <HomeWrapper>
            <Hero />

            { /*
            <ProductsWrapper>
                <h2>Recomendados</h2>
                <Recommended />

            </ProductsWrapper>
            */ }


            <ProductsWrapper>
                <h2>Pokémon cards</h2>
                <CardsContainer />
            </ProductsWrapper>
        </HomeWrapper>
    )
}

export default Home;