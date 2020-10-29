import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [enabledState, setEnabledState] = useLocalStorage(key);
  const prefersDarkMode = usePrefersDarkMode();
  console.log(enabledState);
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = document.querySelector(".App");
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
};

function usePrefersDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
