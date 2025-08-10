import { AccessLinkStyled, HeroContainer, HeroContent, ImageContainer, NavLinkStyled } from "./HeroStyles"
import wallpaper  from "../../assets/images/wallpaper.jpg"

const Hero = () => {
    return(
        <HeroContainer>
            
            <HeroContent>
                <h1>The Pokémon World Cup is coming</h1>
                <h2>Buy your Pokémon here, train them and become the new Champion!</h2>
            </HeroContent>

            { /*
            <AccessLinkStyled>
                <NavLinkStyled to="/about">
                    About
                </NavLinkStyled>
            </AccessLinkStyled>

           
            <ImageContainer>
                <img src={ wallpaper } alt="Imagen del hero" />
            </ImageContainer>
            */ }
        </HeroContainer>
    )
}

export default Hero;