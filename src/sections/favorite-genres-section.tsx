import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";

import Alert from "@/components/alert";
import CircularProgress from "@/components/circular-progress";
import AddIcon from "@/icons/add-icon";
import { getMovieGenres } from "@/services/tmdb-service";

interface FavoriteGenresSectionProps {
  style?: StyleXStyles;
}

export default function FavoriteGenresSection({
  style,
}: FavoriteGenresSectionProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movieGenres"] as const,
    queryFn: () => getMovieGenres(),
  });

  if (isLoading) return <CircularProgress style={[styles.container, style]} />;
  if (isError) {
    return (
      <div {...stylex.props(styles.container)}>
        <Alert>Error al cargar géneros: {error.message}</Alert>
      </div>
    );
  }

  const selectedGenres = data?.genres?.slice(0, 5) ?? [];

  return (
    <div {...stylex.props(styles.container, style)}>
      <h2 {...stylex.props(styles.title)}>Favourite genres</h2>

      <div {...stylex.props(styles.genreContainer)}>
        {selectedGenres.map((genre, index) => {
          const bgColor = getRandomColor(index);

          return (
            <button
              key={genre.id}
              {...stylex.props(
                styles.genreButton(bgColor ?? "oklch(100% 0% 0deg / 30%)"),
              )}
            >
              {genre.name}
            </button>
          );
        })}
      </div>

      <button {...stylex.props(styles.addGenreButton)}>
        <AddIcon />
        Add your favourite genres
      </button>
    </div>
  );
}

function getRandomColor(index: number) {
  const colors = [
    "oklch(45% 45% 39deg)",
    "oklch(45% 25% 295deg)",
    "oklch(45% 35% 130deg)",
    "oklch(45% 15% 20deg)",
    "oklch(45% 15% 260deg)",
  ];

  return colors[index % colors.length];
}

const styles = stylex.create({
  container: {
    backgroundColor: "oklch(100% 0% 0deg / 10%)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700,
  },
  genreContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  genreButton: (bgColor: string) => ({
    backgroundColor: {
      default: bgColor,
      ":hover": `color-mix(in oklch, ${bgColor}, oklch(from ${bgColor} 100% c h) 10%)`,
    },
    borderRadius: "1.25rem",
    borderStyle: "none",
    cursor: "pointer",
    paddingBlock: "0.5rem",
    paddingInline: "1rem",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  }),
  addGenreButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderStyle: "none",
    color: {
      default: "oklch(100% 0% 0deg / 70%)",
      ":hover": "oklch(100% 0% 0deg / 100%)",
    },
    display: "flex",
    gap: "0.5rem",
    transitionDuration: "200ms",
    transitionProperty: "color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
