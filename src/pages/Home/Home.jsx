import { CardsContainerStyled, CardWrapperStyled, HomeWrapper, LinkButtonStyled, SectionWrapper, TitleSectionStyled } from "./HomeStyles"
import Hero from "../../components/Hero/Hero"
import CategoriesContainer from "../../components/Categories/CategoriesContainer/CategoriesContainer";
import CategoriesRecommended from "../../components/CategoriesRecommended/CategoriesRecommended";

import batalla from "../../assets/images/batalla-pokemon.webp";
import campeonato from "../../assets/images/campeonato-pokemon.jpg";
import entrenamiento from "../../assets/images/entrenamiento-pokemon.jpg";


const Home = () => {
    return (
        <HomeWrapper>
            <Hero />

            <SectionWrapper>
                <CategoriesContainer />
            </SectionWrapper>


            <SectionWrapper>
                <TitleSectionStyled>Hello Pokemon trainer!</TitleSectionStyled>
                <CardsContainerStyled>
                    <CardWrapperStyled>
                        <img src={entrenamiento} alt="entrenamiento Pokemon" />
                        <h2>Entrena a tus Pokemones</h2>
                        <p>
                            Mejora las habilidades de tus Pokémon con 
                            entrenamientos personalizados. ¡Haz que tus 
                            Pokémon sean más fuertes y listos para la batalla!
                        </p>
                    </CardWrapperStyled>
                    <CardWrapperStyled>
                        <img src={batalla} alt="Pokemon Battle" />
                        <h2>Gana batallas contra otros</h2>
                        <p>
                            Participa en emocionantes batallas Pokémon y 
                            demuestra tu habilidad como entrenador. 
                            ¡Desafía a otros jugadores y conviértete en el mejor!
                        </p>
                    </CardWrapperStyled>
                    <CardWrapperStyled>
                        <img src={campeonato} alt="campeonato Pokemon" />
                        <h2>Gana el campoenato Pokemon</h2>
                        <p>
                            Compite en el campeonato Pokémon y lucha por 
                            la gloria. ¡Demuestra que eres el mejor entrenador 
                            y gana el título de campeón!
                        </p>
                    </CardWrapperStyled>
                </CardsContainerStyled>
                <LinkButtonStyled href="/about">Learn more</LinkButtonStyled>
            </SectionWrapper>



            <SectionWrapper>
                <TitleSectionStyled>Some recommended categories</TitleSectionStyled>
                <CategoriesRecommended />
            </SectionWrapper>
        </HomeWrapper>
    )
}

export default Home;