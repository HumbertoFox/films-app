import FilmsList from "./components/filmslist";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilmsList />
    </main>
  );
}
