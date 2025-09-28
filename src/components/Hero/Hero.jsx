import { HeroContainerStyled, HeroContent, ImageContainerStyled, TextContainerStyled } from "./HeroStyles"
import wallpaper  from "../../assets/images/wallpaper.jpg"

const Hero = () => {
    return(
        <HeroContainerStyled>
            <HeroContent>
                <ImageContainerStyled>
                    <img src={ wallpaper } alt="Image hero" />
                    <TextContainerStyled>
                        <h1>The Pokémon World Cup is coming</h1>
                        <h2>Buy your Pokémon here, train them and become the new Champion!</h2>
                    </TextContainerStyled>
                </ImageContainerStyled>
            </HeroContent>
        </HeroContainerStyled>
    )
}

export default Hero;