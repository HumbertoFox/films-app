import { PropsFilms } from '../types';
import StartRanking from '../startranking';
import styles from '../styles/pages.module.css';
import Image from 'next/image';

export default function FilmCard({ film }: PropsFilms) {
    const { title, overview, poster_path, vote_average } = film;

    return (
        <div className={styles.film_card}>
            <div className={styles.film_poster}>
                <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} width={300} height={300} alt={`Image do Filme ${title}`} />
            </div>
            <div className={styles.film_info}>
                <p className={styles.film_title}>{title}</p>
                { vote_average > 0 && <StartRanking ranking={vote_average} />}
                <div className={styles.hidden_content}>
                    {overview && <p className={styles.film_description}>{overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}</p>}
                    <button type='button' aria-label={`Mais informações sobre ${title}`}>Ver mais</button>
                </div>
            </div>
        </div>
    );
};