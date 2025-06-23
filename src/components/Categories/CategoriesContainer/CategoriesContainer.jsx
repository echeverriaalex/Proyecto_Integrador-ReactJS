import { useEffect, useState } from "react";
import { getAllCategoriesFromApi } from "../../../axios/Categories/axios-categories";
import { CategoriesContainerStyled, CategoryContainerStyled } from "./CategoriesContainerStyles";
import typeIcons from "../../../utils/setIcon";
import TypeLabelContainer from "../../Products/Card/Components/TypeLabelContainer/TypeLabelContainer";

const CategoriesContainer = () => {

    const [categoriesList, setCategoriesList] = useState([]);

    const fectchCategories = async () => {
        try {
            const categories = await getAllCategoriesFromApi();
            setCategoriesList(categories);
            return categories;
        }
        catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    };


    useEffect(() => {
        fectchCategories();
    }, []);
    
    return (
        <CategoriesContainerStyled>
            {
                categoriesList.map((category, index) => (
                    <CategoryContainerStyled key={index}>
                        <h3>{category.name}</h3>


                        <img src={ typeIcons[category.name] } alt={category.name} />

                       


                        {/*<p>{category.url}</p> */}
                    </CategoryContainerStyled>
                ))
            }
        </CategoriesContainerStyled>
    );
}

export default CategoriesContainer;