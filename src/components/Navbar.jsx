import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = (props) => {
  const [theme, setTheme] = useDarkMode("darkMode");
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    setTheme(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={theme ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
