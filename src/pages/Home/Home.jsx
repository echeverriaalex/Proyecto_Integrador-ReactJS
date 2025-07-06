import { HomeWrapper, SectionWrapper } from "./HomeStyles"
import Hero from "../../components/Hero/Hero"
import CategoriesContainer from "../../components/Categories/CategoriesContainer/CategoriesContainer";
import CategoriesRecommended from "../../components/CategoriesRecommended/CategoriesRecommended";

const Home = () => {
    return (
        <HomeWrapper>
            <Hero />

            <CategoriesContainer />
            
            <SectionWrapper>                
                <h2>Recommended Categories</h2>
                <CategoriesRecommended />
            </SectionWrapper>
        </HomeWrapper>
    )
}

export default Home;