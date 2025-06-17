import * as stylex from "@stylexjs/stylex";

export default function PlansPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <h2>Contenido de Planes</h2>
      <div>¡Aquí podrás ver tus opciones de suscripción!</div>
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
