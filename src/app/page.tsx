'use client';
import { SetStateAction, useState } from 'react';
import FilmsList from './components/filmslist';
import NavBar from './components/navbar';
import styles from './page.module.css';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1)
  const incrementPage = () => setPage(prevPage => (prevPage < totalPage ? prevPage + 1 : prevPage));
  const decrementPage = () => setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage);
  const getTotalPages = (element: SetStateAction<number>) => {
    setTotalPage(element);
  };

  return (
    <main className={styles.main}>
      <NavBar page={page} totalpages={totalPage} onIncrement={incrementPage} onDecrement={decrementPage} />
      <FilmsList page={page} totalpages={getTotalPages} />
    </main>
  );
};