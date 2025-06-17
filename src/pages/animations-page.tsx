import * as stylex from "@stylexjs/stylex";

export default function AnimationsPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <h2>Contenido de Animaciones</h2>
      <div>¡Pronto, lo mejor del mundo animado!</div>
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
