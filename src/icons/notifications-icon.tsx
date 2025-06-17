import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface NotificationsIconProps {
  style?: StyleXStyles;
}

export default function NotificationsIcon({ style }: NotificationsIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...stylex.props(style)}
    >
      <circle
        cx="11.5"
        cy="12.5"
        r="8.5"
        stroke="currentcolor"
        strokeWidth="2"
      />
    </svg>
  );
}
