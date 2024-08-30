'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { NavBarProps } from '../types';
import styles from '../styles/navbar.module.css';

export default function NavBar({ page, onIncrement, onDecrement }: NavBarProps) {
    return (
        <nav className={styles.navbar}>
            <FontAwesomeIcon icon={faBackward} onClick={onDecrement} className={page === 1 ? styles.cursoroff : ''} />
            <h1>Lista de Filmes - Página {page}</h1>
            <FontAwesomeIcon icon={faForward} onClick={onIncrement} />
        </nav>
    );
};