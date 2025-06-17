import type { MovieGenresResponse, MovieListResponse } from "./tmdb-types";

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
