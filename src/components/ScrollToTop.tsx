import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to top whenever the route changes.
 * Fixes the issue where navigating (e.g. from mobile menu) keeps the previous scroll position.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
