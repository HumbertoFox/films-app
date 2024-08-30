import styles from '../styles/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <FontAwesomeIcon icon={faBackward} />
            <h1>Lista de Filmes</h1>
            <FontAwesomeIcon icon={faForward} />
        </nav>
    );
};