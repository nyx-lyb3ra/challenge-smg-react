import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface DownArrowIconProps {
  style?: StyleXStyles;
}

export default function DownArrowIcon({ style }: DownArrowIconProps) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...stylex.props(styles.base, style)}
    >
      <path
        d="m 1,2.8964466 4,4 4,-4"
        stroke="currentcolor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const styles = stylex.create({
  base: {
    color: "oklch(100% 0% 0deg / 80%)",
  },
});
