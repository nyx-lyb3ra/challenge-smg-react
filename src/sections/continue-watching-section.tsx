import * as stylex from "@stylexjs/stylex";

import MovieCard from "@/components/movie-card";

export default function ContinueWatchingSection() {
  return (
    <div {...stylex.props(styles.container)}>
      <h2 {...stylex.props(styles.title)}>Continue Watching</h2>

      <div {...stylex.props(styles.gridContainer)}>
        <MovieCard
          movie={{
            id: 693134,
            title: "Dune: Part Two",
            release_date: "2024-02-27",
            vote_average: 8.146,
            backdrop_path: "/fahk0Fu7VUUfK6IkTt1R3waOD9F.jpg",
          }}
          style={styles.gridItem}
        />
        <MovieCard
          movie={{
            id: 1022789,
            title: "Inside Out 2",
            release_date: "2024-06-11",
            vote_average: 7.554,
            backdrop_path: "/7hYG0v6BEErqqwnU7vWJjWgYJJp.jpg",
          }}
          style={styles.gridItem}
        />
        <MovieCard
          movie={{
            id: 786892,
            title: "Furiosa: A Mad Max Saga",
            release_date: "2024-05-22",
            vote_average: 7.476,
            backdrop_path: "/fhv3dWOuzeW9eXOSlr8MCHwo24t.jpg",
          }}
          style={styles.gridItem}
        />
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
    width: {
      default: "100%",
      "@media (1200px > width >= 768px)": "calc(calc(100% - 1rem) / 2)",
      "@media (width >= 1200px)": "calc(calc(100% - 2rem) / 3)",
    },
  },
});
