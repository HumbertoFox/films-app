export interface Film {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number,
};

export interface Props {
    ranking: number;
};

export interface FilmResponse {
    page: number;
    results: Film[];
    total_results: number;
    total_pages: number;
};

export interface PropsFilms {
    film: Film;
};

export interface Pages {
    page: number;
}

export interface NavBarProps {
    page: number;
    onIncrement: () => void;
    onDecrement: () => void;
};