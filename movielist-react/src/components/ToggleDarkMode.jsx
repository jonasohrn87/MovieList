import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import { BsSunFill } from "react-icons/bs";

const ToggleDarkMode = () => {
  const { toggleDarkMode } = useContext(MovieContext);

  return (
    <button className="darkMode-btn" value="dark" onClick={toggleDarkMode}>
      <span className="visually-hidden">Mörkt läge</span>
      <BsSunFill />
    </button>
  );
};

export default ToggleDarkMode;
