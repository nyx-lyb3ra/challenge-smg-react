import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface SearchIconProps {
  style?: StyleXStyles;
}

export default function SearchIcon({ style }: SearchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...stylex.props(style)}
    >
      <path
        d="M21 21L16.7501 16.7425L21 21ZM19.1053 11.0526C19.1053 13.1883 18.2569 15.2365 16.7467 16.7467C15.2365 18.2569 13.1883 19.1053 11.0526 19.1053C8.91694 19.1053 6.86872 18.2569 5.35856 16.7467C3.8484 15.2365 3 13.1883 3 11.0526C3 8.91694 3.8484 6.86872 5.35856 5.35856C6.86872 3.8484 8.91694 3 11.0526 3C13.1883 3 15.2365 3.8484 16.7467 5.35856C18.2569 6.86872 19.1053 8.91694 19.1053 11.0526V11.0526Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
