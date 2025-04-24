import { HeroContainer, HeroContent, ImageContainer } from "./HeroStyles"
import logo_buy  from "../../assets/images/logo_buy.svg"

const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <h1>¡Descúbrenos y déjamos sorprenderte!</h1>
            </HeroContent>
            <ImageContainer>
                <img src={logo_buy} alt="Imagen del hero" />
            </ImageContainer>
        </HeroContainer>
    )
}

export default Hero;