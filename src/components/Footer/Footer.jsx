import { DeveloperContainer, FooterStyled, Project, ProjectContainer } from "./FooterStyles"

const Footer = () => {
    return(
        <FooterStyled>
            <h2>Explora mis otros Proyectos</h2>
            <ProjectContainer>
                <Project>
                    <img src="https://carstorepremium.vercel.app/assets/images/logo.webp"/>
                    <p>Luxury vehículos de lujo</p>
                </Project>
                <Project>
                    <img src="https://statics.redaccionmayo.com.ar/2023/01/crop/63c1c82aca69a__680x453.webp"/>
                    <p>MEGA_BUY</p>
                </Project>
            </ProjectContainer>
            
            <a href="https://github.com/echeverriaalex">👉 Conocé más de mis proyectos 👈</a>
            
            <DeveloperContainer>
                <p>Developed with ReactJS by <a href="https://alexnahuelecheverria.vercel.app/">Alex Nahuel Echeverria</a></p>
                <p>Todos los derechos reservados &copy; 2025</p>
            </DeveloperContainer>
        </FooterStyled>
    )
}

export default Footer;