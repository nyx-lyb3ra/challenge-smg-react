import * as stylex from "@stylexjs/stylex";
import { Link, Route, Routes } from "react-router";

import HeaderBar from "./components/header-bar";
import IconButton from "./components/icon-button";
import Tab from "./components/tab";
import Tabs from "./components/tabs";
import useRouteMatch from "./hooks/use-route-match";
import AppsIcon from "./icons/apps-icon";
import NotificationsIcon from "./icons/notifications-icon";
import SearchIcon from "./icons/search-icon";
import AnimationsPage from "./pages/animations-page";
import MoviesPage from "./pages/movies-page";
import PlansPage from "./pages/plans-page";
import TvShowsPage from "./pages/tv-shows-page";
import DownArrowIcon from "./icons/down-arrow-icon";
import Avatar from "./components/avatar";

export default function App() {
  const routeMatch = useRouteMatch(["/", "/tv-shows", "/animations", "/plans"]);
  const currentTab = routeMatch?.pattern.path;

  return (
    <div {...stylex.props(styles.container)}>
      <HeaderBar style={styles.headerbar}>
        <Tabs value={currentTab}>
          <Tab value="/" to="/" component={Link}>
            Movies
          </Tab>

          <Tab value="/tv-shows" to="/tv-shows" component={Link}>
            TV Shows
          </Tab>

          <Tab value="/animations" to="/animations" component={Link}>
            Animations
          </Tab>

          <Tab value="/plans" to="/plans" component={Link}>
            Plans
          </Tab>
        </Tabs>

        <div {...stylex.props(styles.actionsContainer)}>
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <AppsIcon />
          </IconButton>

          <IconButton>
            <Avatar size={20} source="/profile-picture.jpg" />
            <DownArrowIcon />
          </IconButton>
        </div>
      </HeaderBar>

      <Routes>
        <Route index element={<MoviesPage />} />
        <Route path="tv-shows" element={<TvShowsPage />} />
        <Route path="animations" element={<AnimationsPage />} />
        <Route path="plans" element={<PlansPage />} />
      </Routes>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  headerbar: {
    justifyContent: "space-between",
    paddingInlineStart: "9rem",
  },
  actionsContainer: {
    display: "flex",
    gap: "0.5rem",
  },
});
