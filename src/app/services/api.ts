'use server';
import axios from 'axios';
import { FilmResponse } from '../components/types';

const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

export const getFilmes = async (page: number): Promise<FilmResponse> => {
    try {
        const response = await axios.get<FilmResponse>(BASE_URL, {
            params: {
                api_key: process.env.API_KEY,
                language: 'pt-BR',
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw error;
    };
};