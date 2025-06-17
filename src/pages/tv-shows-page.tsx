import * as stylex from "@stylexjs/stylex";

export default function TvShowsPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <h2>Contenido de TV Shows</h2>
      <div>¡Aquí irán tus series favoritas de TMDB!</div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: "1rem",
    justifyContent: "center",
  },
});
