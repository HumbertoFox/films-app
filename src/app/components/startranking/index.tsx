import { Props } from '../types';
import { FaStar, FaRegStar } from 'react-icons/fa6';
import styles from '../styles/pages.module.css';

export default function StartRanking(props: Props) {
    const NumStar = Math.round(props.ranking / 2);

    const FullStar = [];
    const EmptStar = [];

    for (let i = 0; i < 5; i++) {
        if (i < NumStar) {
            FullStar.push(i);
        } else {
            EmptStar.push(i);
        }
    };
    return (
        <div className={styles.divstar}>
            {FullStar.map(index =>
                <FaStar key={index} />
            )}
            {EmptStar.map(index =>
                <FaRegStar key={index} />
            )}
        </div>
    );
};