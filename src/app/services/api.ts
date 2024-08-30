import axios from 'axios';
import { FilmResponse } from '../components/types';

const API_KEY = 'c6305c0e12e0d09ae5858bde5a5a9046';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

export const getFilmes = async (): Promise<FilmResponse> => {
    try {
        const response = await axios.get<FilmResponse>(BASE_URL, {
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw error;
    };
};
