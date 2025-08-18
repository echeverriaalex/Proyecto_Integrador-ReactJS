import { CategoryPageWrapper, HeroCategoryPage, TextCategoryContainerStyled } from "./CategoryPageStyles";
import { useParams } from "react-router-dom";
import HeroCategory from "../../utils/setHeroCategory";
import { useEffect, useState } from "react";
import { getDataFromType, getInfoPokemonByURLFromApi } from "../../axios/axios-pokemons";
import { POKEMON_TYPE } from "../../utils/constants";
import CardsCatalog from "../../components/Products/CardsCatalog/CardsCatalog";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { isError, isFetching, success } from "../../redux/slice/pokemonsSlice";

const CategoryPage = () => {

  const { category } = useParams();
  const [ dataList, setDataList ] = useState([]);
  const  URL_TYPE = `${POKEMON_TYPE}${category}`;
  const dispatch = useDispatch();
  const { pokemonsList, isLoading, error } = useSelector(state => state.pokemons);

  const fetchData = async () => {
    //setDataList([]);
    try {
      const response = await getDataFromType(URL_TYPE);
      return response;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const fetchPokemons = async () => {
    //setDataList([]);
    try {
      dispatch(isFetching());
      const dataAPI = await fetchData(URL_TYPE);

      if (dataAPI.pokemon) {
        const dataCategory = await Promise.all(
          dataAPI.pokemon.map(async item => {
            const pokemonInfo = await getInfoPokemonByURLFromApi(item.pokemon.url);
            return { ...pokemonInfo };
          })
        );
        //setDataList(dataCategory);
        dispatch(success(dataCategory));
      }
      /*
      else{
        setDataList( [{ message: "No Pokémon found in this category." }] );
      }
      */
    } catch (erro) {
      console.error("Error fetching categories:", erro);
      dispatch(isError(error));
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [category]);

  return (
    <>
      {
        isLoading ?
          <Loader 
            message={`Pokémon in the ${category.toLocaleUpperCase()} category`}
            isLoading={isLoading} 
          />
          :
          <CategoryPageWrapper>
            <HeroCategoryPage category = { HeroCategory[category] }>
              <TextCategoryContainerStyled>
                <p>Type</p>
                <h2> { category }</h2>
              </TextCategoryContainerStyled>
            </HeroCategoryPage>
            {pokemonsList ? (
              <CardsCatalog productsList={pokemonsList} />
            ) : (
              <p>No Pokémon found in this category.</p>
            )}
          </CategoryPageWrapper>
      }
    </>
  );
}

export default CategoryPage;