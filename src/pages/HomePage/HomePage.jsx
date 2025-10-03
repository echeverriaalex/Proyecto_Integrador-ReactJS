import { CardsContainerStyled, CardWrapperStyled, HomePageWrapper, LinkButtonStyled, SectionWrapper, TextContainerStyled, TitleSectionStyled } from "./HomePageStyles"
import Hero from "../../components/Hero/Hero"
import CategoriesContainer from "../../components/Categories/CategoriesContainer/CategoriesContainer";
import CategoriesRecommended from "../../components/CategoriesRecommended/CategoriesRecommended";
import batalla from "../../assets/images/batalla-pokemon.webp";
import campeonato from "../../assets/images/campeonato-pokemon.jpg";
import entrenamiento from "../../assets/images/entrenamiento-pokemon.jpg";

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Hero />
            <SectionWrapper>
                <CategoriesContainer />
            </SectionWrapper>
            <SectionWrapper>
                <TitleSectionStyled>Hello Pokemon trainer!</TitleSectionStyled>
                <CardsContainerStyled>
                    <CardWrapperStyled>
                        <img src={batalla} alt="Pokemon Battle" />
                        <TextContainerStyled>
                            <h2>Win battles solo and in teams</h2>
                            <p>
                                Participate in exciting Pokémon battles and
                                show off your skills as a trainer.
                                Challenge other players and become the best!
                            </p>
                        </TextContainerStyled>
                    </CardWrapperStyled>
                    <CardWrapperStyled>
                        <img src={entrenamiento} alt="entrenamiento Pokemon" />
                        <TextContainerStyled>
                            <h2>Discover your Pokémon</h2>
                            <p>
                                Discover all his tricks by combining 
                                attack and defense skills
                            </p>
                        </TextContainerStyled>
                    </CardWrapperStyled>
                    <CardWrapperStyled>
                        <img src={campeonato} alt="campeonato Pokemon" />
                        <TextContainerStyled>
                            <h2>Win the Pokémon Cup </h2>
                            <p>
                                Compete in the Pokémon championship and fight for
                                glory. Show that you are the best trainer
                                and win the title of champion!
                            </p>
                        </TextContainerStyled>
                    </CardWrapperStyled>
                </CardsContainerStyled>
                <LinkButtonStyled to="/about">Learn more</LinkButtonStyled>
            </SectionWrapper>
            <SectionWrapper>
                <TitleSectionStyled>Our suggestions</TitleSectionStyled>
                <CategoriesRecommended />
            </SectionWrapper>
        </HomePageWrapper>
    )
}

export default HomePage;