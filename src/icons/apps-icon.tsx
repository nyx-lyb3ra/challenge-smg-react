import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface AppsIcon {
  style?: StyleXStyles;
}

export default function AppsIcon({ style }: AppsIcon) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...stylex.props(style)}
    >
      <circle cx="6.4" cy="7.4" r="2.9" stroke="currentcolor" />
      <circle cx="16.6" cy="7.4" r="2.9" stroke="currentcolor" />
      <circle cx="16.6" cy="17.6" r="2.9" stroke="currentcolor" />
      <circle cx="6.4" cy="17.6" r="2.9" stroke="currentcolor" />
    </svg>
  );
}
