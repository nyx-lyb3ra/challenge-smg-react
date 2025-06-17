import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface CircularProgressProps {
  style?: StyleXStyles;
}

const spin = stylex.keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export default function CircularProgress({ style }: CircularProgressProps) {
  return (
    <div {...stylex.props(styles.container, style)}>
      <div {...stylex.props(styles.spinner)} />
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  spinner: {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationName: spin,
    animationTimingFunction: "linear",
    borderBlockStartColor: "oklch(100% 0% 0deg)",
    // eslint-disable-next-line @stylexjs/valid-shorthands
    borderColor: "oklch(100% 0% 0deg / 10%)",
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: "0.25rem",
    height: "2rem",
    width: "2rem",
  },
});
