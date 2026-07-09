"use client";

import { useEffect } from "react";

/**
 * Swaps the browser-tab title while the tab is in the background and
 * restores the page title when the user comes back.
 */
export function TabTitle({ awayTitle }: { awayTitle: string }) {
  useEffect(() => {
    let lastTitle = document.title;
    const onVisibilityChange = () => {
      if (document.hidden) {
        lastTitle = document.title;
        document.title = awayTitle;
      } else {
        document.title = lastTitle;
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [awayTitle]);

  return null;
}
