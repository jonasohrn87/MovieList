import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import { BsSunFill } from "react-icons/bs";

const ToggleDarkMode = () => {
  const { toggleDarkMode } = useContext(MovieContext);

  return (
    <button className="darkMode-btn" onClick={toggleDarkMode}>
      <BsSunFill />
    </button>
  );
};

export default ToggleDarkMode;
