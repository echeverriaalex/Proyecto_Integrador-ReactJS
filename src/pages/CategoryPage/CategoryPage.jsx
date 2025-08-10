import { CategoryPageWrapper, HeroCategoryPage, TextCategoryContainerStyled } from "./CategoryPageStyles";
import { useParams } from "react-router-dom";
import HeroCategory from "../../utils/setHeroCategory";
import { useEffect, useState } from "react";
import { getDataFromType, getInfoPokemonByURLFromApi } from "../../axios/axios-pokemons";
import { POKEMON_TYPE } from "../../utils/constants";
import CardsCatalog from "../../components/Products/CardsCatalog/CardsCatalog";
import Loader from "../../components/Loader/Loader";

const CategoryPage = () => {

  const { category } = useParams();
  const [ dataList, setDataList ] = useState([]);
  const  URL_TYPE = `${POKEMON_TYPE}${category}`;

  const fetchData = async () => {
    setDataList([]);
    try {
      const response = await getDataFromType(URL_TYPE);
      const dataCategory = await Promise.all(
          response.pokemon.map(async item => {
              const pokemonInfo = await getInfoPokemonByURLFromApi(item.pokemon.url);
              return { ...pokemonInfo };
          })
      );
      setDataList(dataCategory);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <CategoryPageWrapper>
      <HeroCategoryPage category = { HeroCategory[category] }>
        <TextCategoryContainerStyled>
          <p>Type</p>
          <h2> { category }</h2>
        </TextCategoryContainerStyled>
      </HeroCategoryPage>
      { dataList.length === 0 ? <Loader /> : <CardsCatalog productsList = {dataList} /> }
    </CategoryPageWrapper>
  );
}

export default CategoryPage;