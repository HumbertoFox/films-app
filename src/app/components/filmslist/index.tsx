'use client';
import { useEffect, useState } from 'react';
import { Film } from '../types';
import { getFilmes } from '@/app/services/api';
import ReactLoading from 'react-loading';
import FilmCard from '../filmscard';
import styles from '../styles/pages.module.css';

export default function FilmsList() {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchFilms = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getFilmes();
            setFilms(data.results);
        } catch (error) {
            setError('Erro ao buscar filmes');
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchFilms();
    }, []);
    
    if (loading) {
        return (
            <div className={styles.film_list}>
                <ReactLoading type='spin' color='#6046FF' height={'20%'} width={'20%'} />
            </div>
        );
    };
    return (
        <section className={styles.films_list}>
            {error && <p>{error}</p>}
            {films.map(film => (
                <FilmCard
                    key={film.id}
                    film={film}
                />
            ))}
        </section>
    );
};