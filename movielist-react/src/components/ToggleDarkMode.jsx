import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import { MdDarkMode } from "react-icons/md";

const ToggleDarkMode = () => {

    return (
        <button className="darkMode-btn">
            <MdDarkMode />
        </button>
    );
};

export default ToggleDarkMode;