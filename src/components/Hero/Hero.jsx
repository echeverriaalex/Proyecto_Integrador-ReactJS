import { HeroContainer, HeroContent, ImageContainer } from "./HeroStyles"
import wallpaper  from "../../assets/images/wallpaper.jpg"

const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <h1>Consagrate como el próximo campeón del Mundial Pokémon</h1>
                <h2>¡Comprá tus Pokemones aquí y entrenalos!</h2>
            </HeroContent>
            <ImageContainer>
                <img src={ wallpaper } alt="Imagen del hero" />
            </ImageContainer>
        </HeroContainer>
    )
}

export default Hero;