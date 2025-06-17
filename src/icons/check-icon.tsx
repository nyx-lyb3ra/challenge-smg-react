import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface CheckIconProps {
  style?: StyleXStyles;
}

export default function CheckIcon({ style }: CheckIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...stylex.props(style)}
    >
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}
