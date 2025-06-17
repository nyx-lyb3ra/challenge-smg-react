export interface Movie {
  adult?: boolean | null;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  id?: number | null;
  original_language?: string | null;
  original_title?: string | null;
  overview?: string | null;
  popularity?: number | null;
  poster_path?: string | null;
  release_date?: string | null;
  title?: string | null;
  video?: boolean | null;
  vote_average?: number | null;
  vote_count?: number | null;
}

export interface MovieListResponse {
  dates?: {
    maximum?: string | null;
    minimum?: string | null;
  } | null;
  page?: number | null;
  results?: Movie[] | null;
  total_pages?: number | null;
  total_results?: number | null;
}

export interface Genre {
  id?: number | null;
  name?: string | null;
}

export interface MovieGenresResponse {
  genres?: Genre[] | null;
}
