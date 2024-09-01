export interface Film {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
};

export interface Props {
    ranking: number;
};

export interface FilmResponse {
    page: number;
    results: Film[];
    total_pages: number;
};

export interface PropsFilms {
    film: Film;
    onDetailsClick: () => void;
};

export interface Pages {
    page: number;
    totalpages: any;
}

export interface NavBarProps {
    page: number;
    totalpages: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export interface DetailsFilm extends Film {
    onClose?: () => void;
}