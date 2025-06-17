import * as Select from "@radix-ui/react-select";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import CircularProgress from "@/components/circular-progress";
import MovieCard from "@/components/movie-card";
import DownArrowIcon from "@/icons/down-arrow-icon";
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

  if (isLoading)
    return (
      <div {...stylex.props(styles.container)}>
        <CircularProgress style={styles.spinner} />
      </div>
    );

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

  return (
    <div {...stylex.props(styles.container, style)}>
      <h2 {...stylex.props(styles.title)}>New Trailers</h2>

      <Select.Root value={sortCriteria} onValueChange={setSortCriteria}>
        <Select.Trigger {...stylex.props(styles.selectTrigger)}>
          <Select.Value aria-label={sortCriteria}>
            {sortCriteria === "release_date-desc" &&
              "Fecha de Lanzamiento (más reciente)"}

            {sortCriteria === "release_date-asc" &&
              "Fecha de Lanzamiento (más antigua)"}

            {sortCriteria === "title-asc" && "Título (A-Z)"}
            {sortCriteria === "title-desc" && "Título (Z-A)"}

            {sortCriteria === "vote_average-desc" &&
              "Calificación (mayor a menor)"}

            {sortCriteria === "vote_average-asc" &&
              "Calificación (menor a mayor)"}
          </Select.Value>

          <Select.Icon>
            <DownArrowIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content {...stylex.props(styles.selectContent)}>
            <Select.Viewport {...stylex.props(styles.selectViewport)}>
              <Select.Item
                value="release_date-desc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>
                  Fecha de Lanzamiento (más reciente)
                </Select.ItemText>
              </Select.Item>

              <Select.Item
                value="release_date-asc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>
                  Fecha de Lanzamiento (más antigua)
                </Select.ItemText>
              </Select.Item>

              <Select.Item
                value="title-asc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>Título (A-Z)</Select.ItemText>
              </Select.Item>

              <Select.Item
                value="title-desc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>Título (Z-A)</Select.ItemText>
              </Select.Item>

              <Select.Item
                value="vote_average-desc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>Calificación (mayor a menor)</Select.ItemText>
              </Select.Item>

              <Select.Item
                value="vote_average-asc"
                {...stylex.props(styles.selectItem)}
              >
                <Select.ItemText>Calificación (menor a mayor)</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

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
  spinner: {
    flexGrow: 1,
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
  selectTrigger: {
    alignItems: "center",
    backgroundColor: {
      default: "oklch(100% 0% 0deg / 10%)",
      ":hover": "oklch(100% 0% 0deg / 20%)",
    },
    // eslint-disable-next-line @stylexjs/valid-shorthands
    borderColor: "oklch(100% 0% 0deg / 30%)",
    borderRadius: "0.5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "oklch(100% 0% 0deg)",
    cursor: "pointer",
    display: "flex",
    gap: "0.25rem",
    justifyContent: "space-between",
    minHeight: "2.25rem",
    paddingInline: "1rem",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    width: "100%",
  },
  selectContent: {
    backdropFilter: "blur(30px)",
    backgroundColor: "oklch(30% 5% 285deg / 60%)",
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cfilter%20id%3D%22a%22%20width%3D%221%22%20height%3D%221%22%20x%3D%220%22%20y%3D%220%22%3E%3CfeTurbulence%20baseFrequency%3D%222%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%20type%3D%22fractalNoise%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3CfeComponentTransfer%3E%3CfeFuncA%20slope%3D%22.1%22%20type%3D%22linear%22%2F%3E%3CfeFuncR%2F%3E%3CfeFuncG%2F%3E%3CfeFuncB%2F%3E%3C%2FfeComponentTransfer%3E%3C%2Ffilter%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20filter%3D%22url%28%23a%29%22%2F%3E%3C%2Fsvg%3E")',
    borderRadius: "0.5rem",
    boxShadow:
      "0 5px  5px -3px oklch(0% 0% 0deg / 20%), \
       0 8px 10px  1px oklch(0% 0% 0deg / 14%), \
       0 3px 14px  2px oklch(0% 0% 0deg / 12%)",
    overflow: "hidden",
    zIndex: 1000,
  },
  selectViewport: {
    padding: "0.25rem",
  },
  selectItem: {
    alignItems: "center",
    backgroundColor: {
      ":is([data-highlighted])": "oklch(100% 0% 0deg / 10%)",
    },
    borderRadius: "0.5rem",
    cursor: "pointer",
    display: "flex",
    height: "2.25rem",
    justifyContent: "space-between",
    outline: "none",
    paddingInline: "1rem",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    listStyle: "none",
    paddingInline: 0,
  },
});
