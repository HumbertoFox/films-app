import { Film } from '../types';
import StarRating from '../starrating';
import styles from '../styles/pages.module.css';

export interface Props {
    film: Film
};

export default function FilmCard({ film }: Props) {
    const { title, overview, poster_path, vote_average } = film;

    return (
        <div className={styles.film_card}>
            <div className={styles.film_poster}>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`Imag Poster ${title}`} />
            </div>
            <div className={styles.film_infor}>
                <p className={styles.film_title}>{title}</p>
                { vote_average > 0 && <StarRating rating={vote_average} />}
                <div className={styles.hidden_content}>
                    {overview && <p className={styles.film_description}>{overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}</p>}
                    <button type='button'>Ver mais</button>
                </div>
            </div>
        </div>
    );
};