import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";

import Alert from "@/components/alert";
import CircularProgress from "@/components/circular-progress";
import MovieCard from "@/components/movie-card";
import { getPopularMovies } from "@/services/tmdb-service";

export default function PopularMoviesSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["popularMovies", 1] as const,
    queryFn: ({ queryKey }) => {
      const [, page] = queryKey;
      return getPopularMovies(page);
    },
  });

  if (isLoading) return <CircularProgress style={[styles.container]} />;
  if (isError) {
    return (
      <div {...stylex.props(styles.container)}>
        <Alert>Error al cargar películas populares: {error.message}</Alert>
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.container)}>
      <h2 {...stylex.props(styles.title)}>Popular Movies</h2>

      <div {...stylex.props(styles.gridContainer)}>
        {data?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showVoteAverage
            style={styles.gridItem}
          />
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  gridItem: {
    width: "calc(calc(100% - 2rem) / 3)",
  },
});
