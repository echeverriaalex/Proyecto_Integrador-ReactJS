import Products from "../../components/ProductCatalog/ProductCatalog"
import { HomeWrapper, ProductsWrapper } from "./HomeStyles"
import Hero from "../../components/Hero/Hero"

const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <ProductsWrapper>
                <h2>Pokémon cards</h2>
                <Products />
            </ProductsWrapper>
        </HomeWrapper>
    )
}

export default Home;