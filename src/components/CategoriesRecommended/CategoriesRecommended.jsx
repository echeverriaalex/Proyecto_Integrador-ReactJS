import { useEffect, useState, useRef } from "react";
import { CardContainerStyled, CardsContainerStyled, CategoriesRecommendedContainerStyled, CategoryContainerStyled, ImgContainerStyled, TitleContainerStyled } from "./CategoriesRecommendedStyles";
import { POKEMON_TYPE } from "../../utils/constants";
import { getDataFromType, getInfoPokemonByURLFromApi } from "../../axios/axios-pokemons";
import TypeLabelContainer from "../../components/Products/Card/Components/TypeLabelContainer/TypeLabelContainer";
import typeIcons from "../../utils/setIcon";

const CategoriesRecommended = () => {

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const categoriesList = [ "fire", "water", "rock", "electric", "psychic", "dark"];
    const [ dataList, setDataList ] = useState([]);

    const fetchData = async () => {

        const allCategoriesData = [];

        for (let i = 0; i < categoriesList.length; i++) {

            let URL_TYPE = `${POKEMON_TYPE}${categoriesList[i]}`;

            try {
                const response = await getDataFromType(URL_TYPE);
                //console.log("Response from API:", response);

                const dataCategory = await Promise.all(
                    response.pokemon.map(async item => {
                        //console.log("Pokemon Info:", item.pokemon);
                        const pokemonInfo = await getInfoPokemonByURLFromApi(item.pokemon.url);
                        //console.log("Pokemon Info:", pokemonInfo);                
                        return { type: categoriesList[i], ...pokemonInfo };
                    })
                );

                allCategoriesData.push({
                    category: categoriesList[i],
                    pokemons: dataCategory,
                });
                                
                //setDataList( ...dataList, { category: categoriesList[i], pokemon: dataCategory } )

            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        setDataList(allCategoriesData);
        //console.log(allCategoriesData);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // velocidad de scroll
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <CategoriesRecommendedContainerStyled>
            {
                dataList.map((item, index) => (
                    <CategoryContainerStyled key={index}>
                        <TitleContainerStyled>
                            <img src={typeIcons[item.category]} alt={item.category} />
                            <h3>Pokemons type  <a href={`/pagecategory/${item.category}`}> {item.category}  </a>  </h3>
                            <img src={typeIcons[item.category]} alt={item.category} />
                        </TitleContainerStyled>
                        <CardsContainerStyled
                            ref={containerRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                        { 
                            item.pokemons.map((pokemon, idx) => (
                                <CardContainerStyled key={idx} type={pokemon.type}>
                                    <ImgContainerStyled>
                                        <img src={pokemon.sprites.other["dream_world"].front_default || pokemon.sprites.other["official-artwork"].front_default} />
                                    </ImgContainerStyled>
                                    <p>{pokemon.id}</p>
                                    <p>{pokemon.name}</p>

                                    <TypeLabelContainer types={pokemon.types} />
                                </CardContainerStyled>
                            ))
                        }
                        </CardsContainerStyled>
                    </CategoryContainerStyled>
                ))
            }
        </CategoriesRecommendedContainerStyled>
    );
};

export default CategoriesRecommended;