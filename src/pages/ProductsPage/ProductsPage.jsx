import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import { CatalogWrapper, ContainerButtonsStyled, TextContainerStyled } from "./ProductsPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { HeroPageStyled, ProductsPageWrapper } from "./ProductsPageStyles";
import Button from "../../components/UI/Button/Button"
import { isError, isFetching, success } from "../../redux/slice/pokemonsSlice";
import { getData, getInfoPokemonByURLFromApi } from "../../axios/axios-pokemons";
import CardsCatalog from "../../components/Products/CardsCatalog/CardsCatalog";

const ProductsPage = () => {

  const dispatch = useDispatch();
  const { pokemonsList, isLoading, error } = useSelector((state) => state.pokemons)
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const containerRef = useRef(); // 👈 Referencia al contenedor

  const goToStart = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
      containerRef.current.style.margin = "0rem";
    }
  }

  const fetchData = async (url) => {
    try {
      const dataAPI = await getData(url);
      return dataAPI;
    }
    catch (err) {
      console.error("Error getting information from the URL.", err);
      dispatch(isError(err.message));
    }
  };

  const fetchPokemons = async (url) => {
    try {
      dispatch(isFetching());
      const dataAPI = await fetchData(url);
      setNextUrl(dataAPI.next);
      setPrevUrl(dataAPI.previous);

      const detailedPokemons = await Promise.all(
        dataAPI.results.map(async (pokemon) => {
          const info = await getInfoPokemonByURLFromApi(pokemon.url);
          return { ...pokemon, ...info };
        })
      );
      dispatch(success(detailedPokemons));
    }
    catch (err) {
      console.error("It seems there are problems with the URL: ", url);
      dispatch(isError(err.message));
    }
  }

  // 👇 Funciones para paginación con scroll manual
  const handleNext = () => {
    if (nextUrl) {
      setCurrentUrl(nextUrl);
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (prevUrl) {
      setCurrentUrl(prevUrl);
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchPokemons(currentUrl);
  }, [currentUrl]);

  return (
    <>
      {
        isLoading ?
          <Loader
            message={`All existing pokemons`}
            isLoading={isLoading}
          />
          :
          <ProductsPageWrapper>
            <HeroPageStyled wallpaper={"https://wallpapers.com/images/hd/all-pokemon-pictures-1600-x-1000-tqgk66rp7cllxgrl.jpg"}>
              <TextContainerStyled>
                <p>All</p>
                <h2>Pokemons</h2>
              </TextContainerStyled>
            </HeroPageStyled>

            {pokemonsList ? (
              <CatalogWrapper ref={containerRef} >
                <CardsCatalog productsList={pokemonsList} ref={containerRef} />
                <ContainerButtonsStyled onClick={goToStart} style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
                  <Button onClick={handlePrevious} disabled={!prevUrl}>
                    Anterior
                  </Button>
                  <Button onClick={handleNext} disabled={!nextUrl}>
                    Siguiente
                  </Button>
                </ContainerButtonsStyled>
              </CatalogWrapper>
            ) : (
              <p>No Pokémons found.</p>
            )}

          </ProductsPageWrapper>
      }
    </>
  );
}

export default ProductsPage;