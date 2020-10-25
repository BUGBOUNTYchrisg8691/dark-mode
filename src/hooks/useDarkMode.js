import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    localStorage.setItem("darkMode", true);
  }
  const [someValue, setSomeValue] = useLocalStorage("darkMode");
  return [someValue, setSomeValue];
};

export default useDarkMode;
