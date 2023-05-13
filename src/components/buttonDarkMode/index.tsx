import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import "./styles.scss";

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  });

  const toggleDarkMode = () => {
    setDarkMode((currentValue: string) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button
      className={`dark-mode-btn ${
        darkMode === "dark" ? "dark-mode-btn--active" : ""
      }`}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkMode;
