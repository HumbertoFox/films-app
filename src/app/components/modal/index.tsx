'use client';
import { DetailsFilm } from '../types';
import StartRanking from '../startranking';
import Image from 'next/image';
import styles from './details.module.css';

export default function DetailsClick({ id, overview, poster_path, title, release_date, vote_average, onClose }: DetailsFilm) {
    return (
        <section className={styles.section_details}>
            <div className={styles.div_section}>
                <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} width={500} height={700} alt={`Image do Filme ${title}`} />
                <div className={styles.div_info}>
                    <p>{title}<span>{id}</span></p>
                    {vote_average > 0 && <StartRanking ranking={vote_average} />}
                    <p>{release_date}</p>
                    <div>
                        {overview && <p>{overview}</p>}
                    </div>
                    <button type='button' title='Fechar Detalhues' onClick={onClose}>Fechar</button>
                </div>
            </div>
        </section>
    );
};