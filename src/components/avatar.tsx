import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

interface AvatarProps {
  size?: number;
  source?: string;
  style?: StyleXStyles;
}

export default function Avatar({ size, source, style }: AvatarProps) {
  return (
    <img
      width={size}
      height={size}
      src={source}
      {...stylex.props(styles.base, style)}
    />
  );
}

const styles = stylex.create({
  base: {
    borderRadius: "100%",
  },
});
