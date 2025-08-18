import { useEffect, useState, useRef } from "react";
import { CardContainerStyled, CardsContainerStyled, CategoriesRecommendedContainerStyled, CategoryContainerStyled, ImgContainerStyled, SliderContainerStyled, TitleContainerStyled } from "./CategoriesRecommendedStyles";
import { POKEMON_TYPE } from "../../utils/constants";
import { getDataFromType, getInfoPokemonByURLFromApi } from "../../axios/axios-pokemons";
import TypeLabelContainer from "../../components/Products/Card/Components/TypeLabelContainer/TypeLabelContainer";
import typeIcons from "../../utils/setIcon";
import { NavLink, useNavigate } from "react-router-dom";
import PriceContainer from "../Products/Card/Components/PriceContainer/PriceContainer";
//import { IoIosArrowBack } from "react-icons/io";
//import { IoIosArrowForward } from "react-icons/io";
import SliderButtonRight from "../UI/SliderButtons/SliderButtonRight";
import SliderButtonLeft from "../UI/SliderButtons/SliderButtonLeft";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { calculateProductPrice } from "../../utils/setPricePokemonByType";


const CategoriesRecommended = () => {

    const containerRef = useRef([]);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const navigate = useNavigate();

    const categoriesList = [ "fire", "water", "electric", "psychic", "fairy"];
    const [ dataList, setDataList ] = useState([]);

    const fetchData = async () => {

        const allCategoriesData = [];

        for (let i = 0; i < categoriesList.length; i++) {

            let URL_TYPE = `${POKEMON_TYPE}${categoriesList[i]}`;
            try {
                const response = await getDataFromType(URL_TYPE);
                const dataCategory = await Promise.all(
                    response.pokemon.map(async item => {
                        const pokemonInfo = await getInfoPokemonByURLFromApi(item.pokemon.url);
                        const price = calculateProductPrice(pokemonInfo.types);
                        return { type: categoriesList[i], ...pokemonInfo, price };
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

    const scroll = (direction, index) => {
        const container = containerRef.current[index];
        if (container) {
            const scrollAmount = (container.clientWidth - 100); // ancho visible del contenedor
            const newPos = direction === 'right'
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;
            container.scrollTo({
                left: newPos,
                behavior: 'smooth',
            });
            setScrollLeft(newPos);
        }
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
                            <h3>Pokemons type  <NavLink to={`/pagecategory/${item.category}`}> {item.category}  </NavLink>  </h3>
                            <img src={typeIcons[item.category]} alt={item.category} />
                        </TitleContainerStyled>
                        <SliderContainerStyled>
                            <SliderButtonLeft onClick={() => scroll('left', index)} />
                            <CardsContainerStyled
                                ref={ (el) => (containerRef.current[index] = el) }
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                            >
                                { 
                                    item.pokemons.map((pokemon) => (
                                        <CardContainerStyled key={pokemon.id} type={pokemon.type} onClick={() => navigate(`/products/${pokemon.id}`)}>
                                            <ImgContainerStyled>
                                                <img src={pokemon.sprites.other["dream_world"].front_default || pokemon.sprites.other["official-artwork"].front_default} />
                                            </ImgContainerStyled>
                                            <h2>{pokemon.name ||<Skeleton />}</h2>
                                            <TypeLabelContainer types={pokemon.types} />
                                            <PriceContainer price={pokemon.price}/>
                                        </CardContainerStyled>
                                    ))
                                }
                            </CardsContainerStyled>
                            <SliderButtonRight onClick={() => scroll('right', index)} />
                        </SliderContainerStyled>
                    </CategoryContainerStyled>
                ))
            }
        </CategoriesRecommendedContainerStyled>
    );
};

export default CategoriesRecommended;