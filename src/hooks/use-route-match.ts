import { matchPath, useLocation } from "react-router";

export default function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (const pattern of patterns) {
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch) {
      return possibleMatch;
    }
  }

  return null;
}
