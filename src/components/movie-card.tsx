import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

import PlayIcon from "@/icons/play-icon";
import IconButton from "./icon-button";
import type { Movie } from "@/services/tmdb-types";

interface MovieCardProps {
  movie: Movie;
  showVoteAverage?: boolean;
  style?: StyleXStyles;
}

export default function MovieCard({
  movie,
  showVoteAverage = false,
  style,
}: MovieCardProps) {
  return (
    <li key={movie.id} {...stylex.props(styles.card, style)}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path ?? ""}`}
        alt={movie.title ?? ""}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/100x150/000000/FFFFFF?text=No+Image";
        }}
        {...stylex.props(styles.cardMedia)}
      />

      <div {...stylex.props(styles.cardContent)}>
        <IconButton style={styles.playButton}>
          <PlayIcon />
        </IconButton>

        <div>
          <div {...stylex.props(styles.cardContentTitle)}>{movie.title}</div>

          <div>
            {!showVoteAverage && movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : ""}

            {showVoteAverage &&
              `⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}`}
          </div>
        </div>
      </div>
    </li>
  );
}

const styles = stylex.create({
  card: {
    aspectRatio: "1.85",
    borderRadius: "1.25rem",
    boxShadow:
      "0 2px 1px -1px oklch(0% 0% 0deg / 20%), \
       0 1px 1px      oklch(0% 0% 0deg / 14%), \
       0 1px 3px      oklch(0% 0% 0deg / 12%)",
    overflow: "hidden",
    position: "relative",
  },
  cardMedia: {
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    width: "100%",
  },
  cardContent: {
    alignItems: "center",
    backdropFilter: "blur(30px)",
    backgroundColor: "oklch(30% 5% 285deg / 60%)",
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cfilter%20id%3D%22a%22%20width%3D%221%22%20height%3D%221%22%20x%3D%220%22%20y%3D%220%22%3E%3CfeTurbulence%20baseFrequency%3D%222%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%20type%3D%22fractalNoise%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3CfeComponentTransfer%3E%3CfeFuncA%20slope%3D%22.1%22%20type%3D%22linear%22%2F%3E%3CfeFuncR%2F%3E%3CfeFuncG%2F%3E%3CfeFuncB%2F%3E%3C%2FfeComponentTransfer%3E%3C%2Ffilter%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20filter%3D%22url%28%23a%29%22%2F%3E%3C%2Fsvg%3E")',
    borderRadius: "0.75rem",
    bottom: 0,
    display: "flex",
    gap: "1rem",
    paddingBlock: "0.75rem",
    paddingInline: "2rem",
    position: "absolute",
    width: "100%",
  },
  playButton: {
    backgroundColor: {
      default: "oklch(100% 0% 0deg / 10%)",
      ":hover": "oklch(100% 0% 0deg / 20%)",
      ":active": "oklch(100% 0% 0deg / 30%)",
    },
  },
  cardContentTitle: {
    fontWeight: 700,
  },
});
