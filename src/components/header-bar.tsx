import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";

interface HeaderBarProps {
  children?: ReactNode;
  style?: StyleXStyles;
}

export default function HeaderBar({ children, style }: HeaderBarProps) {
  return <header {...stylex.props(styles.container, style)}>{children}</header>;
}

const styles = stylex.create({
  container: {
    alignItems: "center",
    borderBlockEndColor: "oklch(100% 0% 0deg / 10%)",
    borderBlockEndStyle: "solid",
    borderBlockEndWidth: "1px",
    display: "flex",
    minHeight: "5.5rem",
    paddingInline: "3rem",
  },
});
