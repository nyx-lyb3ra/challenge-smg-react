import * as stylex from "@stylexjs/stylex";

import ContinueWatchingSection from "@/components/continue-watching-section";
import FavoriteGenresSection from "@/components/favorite-genres-section";
import NewTrailersSection from "@/components/new-trailers-section";
import PopularMoviesSection from "@/components/popular-movies-section";

export default function MoviesPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.sidebarContainer)}>
        <NewTrailersSection style={styles.newTrailersSection} />
        <FavoriteGenresSection />
      </div>

      <div {...stylex.props(styles.mainContainer)}>
        <div>
          <div>+ 2 friends are watching</div>
        </div>

        <ContinueWatchingSection />
        <PopularMoviesSection />
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    maxHeight: "calc(100vh - 5.5rem)",
    overflow: "hidden",
  },
  sidebarContainer: {
    borderInlineEndColor: "oklch(100% 0% 0deg / 10%)",
    borderInlineEndStyle: "solid",
    borderInlineEndWidth: "1px",
    display: "flex",
    flexBasis: "25%",
    flexDirection: "column",
    overflowY: "hidden",
  },
  newTrailersSection: {
    flexGrow: 1,
    overflow: "auto",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: "2rem",
    overflowY: "auto",
    padding: "1rem",
  },
});
