import { useEffect, useRef, useState } from "react";
import { getAllCategoriesFromApi } from "../../../axios/axios-categories";
import { CategoriesContainerStyled, CategoryContainerStyled, ImageContainerStyled, SliderCategoriesContainerStyled } from "./CategoriesContainerStyles";
import typeIcons from "../../../utils/setIcon";
import SliderButtonLeft from "../../UI/SliderButtons/SliderButtonLeft";
import SliderButtonRight from "../../UI/SliderButtons/SliderButtonRight";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../../redux/slice/categoriesSlice";

const CategoriesContainer = () => {

    const dispatch = useDispatch();
    const { categories,  error } = useSelector((state) => state.categories);
    //const [categoriesList, setCategoriesList] = useState([]);
    const containerRef = useRef(null);

    const [scrollPos, setScrollPos] = useState(0);

    const fectchCategories = async () => {
        try {
            dispatch(isFetching());
            const categoriesList = await getAllCategoriesFromApi();
            //console.log("Fetched categories:", categories);
            //setCategoriesList(categoriesList);
            dispatch(success(categoriesList));
            return categoriesList;
        }
        catch (error) {
            console.error("Error fetching categories:", error);
            console.error("Error fetching categories:", error.message);
            dispatch(isError(error.message));
            throw error;
        }
    };

    /*
    const scroll = (direction) => {
        
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'right' ? "50%" : "-50%",
                behavior: 'smooth'
            });
        }
        

        const newPos = direction === 'right' ? scrollPos + 40 : scrollPos - 40;
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: newPos,
                behavior: 'smooth',
            });
        }
        setScrollPos(newPos);
    };
    */

    const scroll = (direction) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = (container.clientWidth - 50); // ancho visible del contenedor
            const newPos = direction === 'right'
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;

            container.scrollTo({
                left: newPos,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        fectchCategories();
    }, []);
    
    return (
        <SliderCategoriesContainerStyled>
            <SliderButtonLeft onClick={() => scroll('left')} />
            <CategoriesContainerStyled
                ref={containerRef}
            >
                {
                    categories.map((category, index) => (
                        <CategoryContainerStyled key={index} to={`/pagecategory/${category.name}`}>
                            <ImageContainerStyled>
                                <img src={ typeIcons[category.name] } alt={category.name} />
                            </ImageContainerStyled>
                            <h3>{category.name}</h3>
                        </CategoryContainerStyled>
                    ))
                }
            </CategoriesContainerStyled>
            <SliderButtonRight onClick={() => scroll('right')} />
        </SliderCategoriesContainerStyled>
    );
}

export default CategoriesContainer;