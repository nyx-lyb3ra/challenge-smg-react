import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface PlayIconProps {
  style?: StyleXStyles;
}

export default function PlayIcon({ style }: PlayIconProps) {
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
      <path d="M6 4v16" />
      <path d="M20 12L6 20" />
      <path d="M20 12L6 4" />
    </svg>
  );
}
