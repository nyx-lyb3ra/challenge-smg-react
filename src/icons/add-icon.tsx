import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface AddIconProps {
  style?: StyleXStyles;
}

export default function AddIcon({ style }: AddIconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      {...stylex.props(style)}
    >
      <path
        fill="currentcolor"
        d="M6 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm-.5 3h1v2.5H9v1H6.5V9h-1V6.5H3v-1h2.5V3z"
      />
    </svg>
  );
}
