import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";

interface IconButtonProps {
  children?: ReactNode;
  style?: StyleXStyles;
}

export default function IconButton({ children, style }: IconButtonProps) {
  return <button {...stylex.props(styles.container, style)}>{children}</button>;
}

const styles = stylex.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: {
      default: "transparent",
      ":hover": "oklch(100% 0% 0deg / 10%)",
      ":active": "oklch(100% 0% 0deg / 20%)",
    },
    borderRadius: "100%",
    borderStyle: "none",
    display: "flex",
    gap: "0.25rem",
    height: "3rem",
    justifyContent: "center",
    width: "3rem",
  },
});
