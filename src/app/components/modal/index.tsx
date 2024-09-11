'use client';
import { useState } from 'react';
import { DetailsFilm } from '../types';
import ReactLoading from 'react-loading';
import StartRanking from '../startranking';
import Image from 'next/image';
import styles from './details.module.css';

export default function DetailsClick({ id, overview, poster_path, title, release_date, vote_average, onClose }: DetailsFilm) {
    const [loading, setLoading] = useState<boolean>(true);
    const [year, month, day] = release_date.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <section className={styles.section_details}>
            <div className={styles.div_section}>
                <div className={styles.div_img}>
                    <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} width={500} height={500} alt={`Image do Filme ${title}`} onLoad={() => { setLoading(false) }} />
                    {loading && <div className={styles.loading}><ReactLoading type='spin' color='#6046FF' height={100} width={100} /></div>}
                </div>
                <div className={styles.div_info}>
                    <p><strong>Id: </strong>{id}</p>
                    <p><strong>Título: </strong>{title}</p>
                    <p><strong>Lançamento: </strong>{formattedDate}</p>
                    {vote_average > 0 && <strong className={styles.strong_assessment}>Avaliação:<StartRanking ranking={vote_average} /></strong>}
                    <div>
                        {overview && <p className={styles.p_synopsis}><strong>Sinopse: </strong>{overview}</p>}
                    </div>
                    <button type='button' title='Fechar Detalhes' onClick={onClose}>Fechar</button>
                </div>
            </div>
        </section>
    );
};