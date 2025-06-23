import axios from 'axios';
import { POKEMONS_TYPES } from '../../utils/constants';

export const getAllCategoriesFromApi = async () => {
    try {
        const response = await axios.get(POKEMONS_TYPES);
        return response.data.results;
    } catch (error) {
        console.error("Error En AXIOS fetching all categories -> ", error);
        throw error;
    }
}