import { HeroContainer, HeroContent, ImageContainer } from "./HeroStyles"
import wallpaper  from "../../assets/images/wallpaper.jpg"

const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <h1>Prepárate para el Mundial Pokémon</h1>
                <p>¿Serás vos el próximo campeón?</p>
                <p>¡Comprá tus Pokemones aquí y ahora!</p>
            </HeroContent>
            <ImageContainer>
                <img src={ wallpaper } alt="Imagen del hero" />
            </ImageContainer>
        </HeroContainer>
    )
}

export default Hero;