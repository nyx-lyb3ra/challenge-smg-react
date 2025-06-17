import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";

interface AlertProps {
  children?: ReactNode;
  style?: StyleXStyles;
}

export default function Alert({ children, style }: AlertProps) {
  return <div {...stylex.props(styles.alert, style)}>{children}</div>;
}

const styles = stylex.create({
  alert: {
    backgroundColor: "oklch(45% 40% 25deg)",
    borderRadius: "0.5rem",
    color: "oklch(100% 0% 0deg)",
    fontWeight: "bold",
    paddingBlock: "0.75rem",
    paddingInline: "1rem",
    textAlign: "center",
  },
});
