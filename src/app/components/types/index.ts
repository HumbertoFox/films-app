export interface Film {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
};

export interface Props {
    ranking: number
};

export interface FilmResponse {
    results: Film[];
};

export interface PropsFilms {
    film: Film
};