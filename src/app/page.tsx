'use client';
import { useState } from 'react';
import FilmsList from './components/filmslist';
import NavBar from './components/navbar';
import styles from './page.module.css';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const incrementPage = () => setPage(prevPage => prevPage + 1);
  const decrementPage = () => setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage);

  return (
    <main className={styles.main}>
      <NavBar page={page} onIncrement={incrementPage} onDecrement={decrementPage} />
      <FilmsList page={page} />
    </main>
  );
};