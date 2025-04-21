import { HeroContainer, HeroContent, ImageContainer } from "./HeroStyles"

const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <h1>¡Descúbrenos y déjamos sorprenderte!</h1>
            </HeroContent>
            <ImageContainer>
                <iframe src="https://gifer.com/embed/YIgV" frameBorder="0" allowFullScreen></iframe>
            </ImageContainer>
        </HeroContainer>
    )
}

export default Hero;