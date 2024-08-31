'use client';
import { useEffect, useState } from 'react';
import { Film, Pages } from '../types';
import { getFilmes } from '@/app/services/api';
import ReactLoading from 'react-loading';
import FilmCard from '../filmscard';
import styles from '../styles/pages.module.css';

export default function FilmsList({ page, totalpages }: Pages) {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilms = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getFilmes(page);
                setFilms(data.results);
                totalpages(data.total_pages);
            } catch (error) {
                setError('Erro ao buscar filmes');
            } finally {
                setLoading(false);
            };
        };
        fetchFilms();
    }, [setFilms, page, totalpages]);

    if (loading) {
        return (
            <section className={styles.film_list}>
                <ReactLoading type='spin' color='#6046FF' height={100} width={100} />
            </section>
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