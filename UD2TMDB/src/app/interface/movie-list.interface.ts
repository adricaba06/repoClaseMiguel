export interface MovieDiscoverResponse {
  genres: import("c:/Users/adric/OneDrive/Documentos/repoClaseMiguel/UD2TMDB/src/app/interface/genre-list.interface").Genre[];
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
