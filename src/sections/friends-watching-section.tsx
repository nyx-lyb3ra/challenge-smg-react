import Avatar from "@/components/avatar";
import PlayIcon from "@/icons/play-icon";
import * as stylex from "@stylexjs/stylex";

export default function FriendsWatchingSection() {
  return (
    <div {...stylex.props(styles.container)}>
      <img
        src="https://image.tmdb.org/t/p/original/8mnXR9rey5uQ08rZAvzojKWbDQS.jpg"
        alt="Spider-Man: Into the Spider-Verse Backdrop"
        {...stylex.props(styles.background)}
      />

      <div {...stylex.props(styles.friendsWatchingBlock)}>
        <div {...stylex.props(styles.avatarBlock)}>
          <Avatar source="/friend-1.jpg" size={24} style={styles.avatar} />
          <Avatar
            source="/friend-2.jpg"
            size={24}
            style={[styles.avatar, styles.rightAvatar]}
          />
        </div>

        <p>+2 friends are watching</p>
      </div>

      <button {...stylex.props(styles.watchNowButton)}>
        <PlayIcon />
        <p>Watch Now</p>
      </button>

      <img
        src="https://image.tmdb.org/t/p/original/hOSJGmh7FET9PdjlIuVTUUbi51S.png"
        alt="Spider-Man: Into the Spider-Verse Logo"
        {...stylex.props(styles.logo)}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    borderRadius: "1.25rem",
    minHeight: "8.25rem",
    overflow: "hidden",
    position: "relative",
  },
  background: {
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    width: "100%",
  },
  friendsWatchingBlock: {
    display: "flex",
    gap: "0.5rem",
    left: "1rem",
    position: "absolute",
    top: "1rem",
  },
  avatarBlock: {
    display: "flex",
  },
  avatar: {
    // eslint-disable-next-line @stylexjs/valid-shorthands
    borderColor: "oklch(100% 0% 0deg)",
    borderStyle: "solid",
    borderWidth: "1px",
  },
  rightAvatar: {
    marginInlineStart: "-0.5rem",
  },
  watchNowButton: {
    backgroundColor: {
      default: "oklch(100% 0% 0deg / 10%)",
      ":hover": "oklch(100% 0% 0deg / 20%)",
      ":active": "oklch(100% 0% 0deg / 30%)",
    },
    borderRadius: "0.75rem",
    borderStyle: "none",
    bottom: "1rem",
    display: "flex",
    gap: "0.5rem",
    left: "1rem",
    paddingBlock: "0.5rem",
    paddingInline: "1rem",
    position: "absolute",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  logo: {
    bottom: "1rem",
    height: "5rem",
    position: "absolute",
    right: "1rem",
  },
});
