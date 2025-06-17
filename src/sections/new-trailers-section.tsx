import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import CircularProgress from "@/components/circular-progress";
import MovieCard from "@/components/movie-card";
import Select from "@/components/select";
import { getNewTrailers } from "@/services/tmdb-service";

interface NewTrailersSectionProps {
  style?: StyleXStyles;
}

export default function NewTrailersSection({ style }: NewTrailersSectionProps) {
  const [sortCriteria, setSortCriteria] = useState("release_date-desc");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["newTrailers", 1] as const,
    queryFn: ({ queryKey }) => {
      const [, page] = queryKey;
      return getNewTrailers(page);
    },
  });

  if (isLoading) return <CircularProgress style={[styles.container, style]} />;
  if (isError) {
    return (
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.alert)}>
          Error al cargar nuevos trailers: {error.message}
        </div>
      </div>
    );
  }

  const moviesWithTrailers = data?.results ?? [];
  moviesWithTrailers.sort((a, b) => {
    switch (sortCriteria) {
      case "title-asc":
        return (a.title ?? "").localeCompare(b.title ?? "");

      case "title-desc":
        return (b.title ?? "").localeCompare(a.title ?? "");

      case "release_date-desc":
        return (
          new Date(b.release_date ?? "1900-01-01").getTime() -
          new Date(a.release_date ?? "1900-01-01").getTime()
        );

      case "release_date-asc":
        return (
          new Date(a.release_date ?? "1900-01-01").getTime() -
          new Date(b.release_date ?? "1900-01-01").getTime()
        );

      case "vote_average-desc":
        return (b.vote_average ?? 0) - (a.vote_average ?? 0);

      case "vote_average-asc":
        return (a.vote_average ?? 0) - (b.vote_average ?? 0);

      default:
        return 0;
    }
  });

  const sortOptions = [
    {
      value: "release_date-desc",
      label: "Fecha de Lanzamiento (más reciente)",
    },
    { value: "release_date-asc", label: "Fecha de Lanzamiento (más antigua)" },
    { value: "title-asc", label: "Título (A-Z)" },
    { value: "title-desc", label: "Título (Z-A)" },
    { value: "vote_average-desc", label: "Calificación (mayor a menor)" },
    { value: "vote_average-asc", label: "Calificación (menor a mayor)" },
  ];

  const triggerLabels = {
    "release_date-desc": "Fecha de Lanzamiento (más reciente)",
    "release_date-asc": "Fecha de Lanzamiento (más antigua)",
    "title-asc": "Título (A-Z)",
    "title-desc": "Título (Z-A)",
    "vote_average-desc": "Calificación (mayor a menor)",
    "vote_average-asc": "Calificación (menor a mayor)",
  };

  return (
    <div {...stylex.props(styles.container, style)}>
      <h2 {...stylex.props(styles.title)}>New Trailers</h2>

      <Select
        onValueChange={setSortCriteria}
        options={sortOptions}
        triggerLabelMap={triggerLabels}
        value={sortCriteria}
      />

      <ul {...stylex.props(styles.list)}>
        {moviesWithTrailers.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
  },
  alert: {
    backgroundColor: "oklch(45% 40% 25deg)",
    borderRadius: "0.5rem",
    color: "oklch(100% 0% 0deg)",
    fontWeight: "bold",
    paddingBlock: "0.75rem",
    paddingInline: "1rem",
    textAlign: "center",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    listStyle: "none",
    paddingInline: 0,
  },
});
