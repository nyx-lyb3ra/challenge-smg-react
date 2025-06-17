interface MovieListResponse {
  dates?: {
    maximum?: string | null;
    minimum?: string | null;
  } | null;

  page?: number | null;

  results?:
    | {
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
      }[]
    | null;

  total_pages?: number | null;
  total_results?: number | null;
}

interface MovieGenresResponse {
  genres?:
    | {
        id?: number | null;
        name?: string | null;
      }[]
    | null;
}

const API_KEY = import.meta.env["VITE_API_KEY"] as string;
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchTmdb<T>(
  endpoint: string,
  params: Record<string, unknown> = {},
) {
  const queryString = new URLSearchParams({ api_key: API_KEY, ...params });
  const url = `${BASE_URL}/${endpoint}?${queryString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = (await response.json()) as Record<string, string>;

      throw new Error(
        errorData["status_message"] ??
          `HTTP error! status: ${response.status.toString()}`,
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Error fetching from TMDB endpoint ${endpoint}:`, error);
    throw error;
  }
}

export function getPopularMovies(page = 1): Promise<MovieListResponse> {
  return fetchTmdb("movie/popular", { page });
}

export function getNewTrailers(page = 1): Promise<MovieListResponse> {
  return fetchTmdb("movie/now_playing", { page });
}

export function getMovieDetails(movieId: number) {
  return fetchTmdb(`movie/${movieId.toString()}`);
}

export function getMovieVideos(movieId: number) {
  return fetchTmdb(`movie/${movieId.toString()}/videos`);
}

export function getTrending(mediaType = "movie", timeWindow = "week") {
  return fetchTmdb(`trending/${mediaType}/${timeWindow}`);
}

export function getMovieGenres(): Promise<MovieGenresResponse> {
  return fetchTmdb("genre/movie/list");
}
