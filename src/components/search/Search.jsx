import { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonStyled, ImSearch, InputStyled, SearchFormStyled } from "./SearchStyles";
import { fecthPokemon } from "../../helpers/fetchingPokemon";

const Search = ({handleSubmit}) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    return(
        <SearchFormStyled onSubmit={(e) => {
            //handleSubmit(e, search);
            dispatch(fecthPokemon(e, search));
            setSearch('');
        }}>

            <InputStyled 
                value={search}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />

            <ButtonStyled type="submit">
                <ImSearch size="20" color="#c1c0c9"/>
            </ButtonStyled>
        </SearchFormStyled>
    );
};

export default Search;