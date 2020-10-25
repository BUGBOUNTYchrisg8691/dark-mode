import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("darkMode");
  return [someValue, setSomeValue];
};

export default useDarkMode;
