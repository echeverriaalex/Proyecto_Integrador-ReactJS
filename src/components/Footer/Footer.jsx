
import { useEffect, useState } from "react";
import CategoryCard from "../Categories/CategoryCard/CategoryCard";
import { CategoriesFooterContainer, CategoriesFooterSection, DeveloperContainer, FooterStyled, LinksFooterContainerStyled, NavLinkFooterStyled, Project, ProjectContainer, TitleFooterSectionStyled } from "./FooterStyles"
import { useDispatch } from "react-redux";
import { getAllCategoriesFromApi } from "../../axios/axios-categories";

const Footer = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);

    const fetchAllCategories = async () => {
        try {
            const categoriesList = await getAllCategoriesFromApi();
            setCategories(categoriesList);
            //console.log("Fetched categories:", categoriesList);
        }
        catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    };

    useEffect(() => {
        fetchAllCategories();
    }, []);

    //console.log(categories);

    return(
        <FooterStyled>
            <CategoriesFooterSection>
                <TitleFooterSectionStyled>Categories</TitleFooterSectionStyled>
                <CategoriesFooterContainer>
                    {
                        categories.map((category) => (
                            <CategoryCard category={category} key={category.name}>
                                <p>{category.name}</p>
                            </CategoryCard>
                        ))
                    }
                </CategoriesFooterContainer>
            </CategoriesFooterSection>

            <LinksFooterContainerStyled>
                <TitleFooterSectionStyled>Menu</TitleFooterSectionStyled>
                <NavLinkFooterStyled to="/">Home</NavLinkFooterStyled>
                <NavLinkFooterStyled to="/about">About</NavLinkFooterStyled>
                <NavLinkFooterStyled to="/products">Products</NavLinkFooterStyled>
            </LinksFooterContainerStyled>

            {/*
            <ProjectContainer>
                <TitleFooterSectionStyled>Explora mis otros Proyectos</TitleFooterSectionStyled>
                <Project>
                    <img src="https://carstorepremium.vercel.app/assets/images/logo.webp"/>
                    <p>Luxury vehículos de lujo</p>
                </Project>
                <Project>
                    <img src="https://statics.redaccionmayo.com.ar/2023/01/crop/63c1c82aca69a__680x453.webp"/>
                    <p>MEGA_BUY</p>
                </Project>
                <a href="https://github.com/echeverriaalex">👉 Más de mis proyectos 👈</a>
            </ProjectContainer>
            */}

            <DeveloperContainer>
                <p>Developed with ReactJS by <a href="https://alexnahuelecheverria.vercel.app/">Alex Nahuel Echeverria</a></p>
                <p>Todos los derechos reservados &copy; 2025</p>
            </DeveloperContainer>
        </FooterStyled>
    )
}

export default Footer;