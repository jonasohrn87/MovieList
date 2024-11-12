import React, { useContext } from "react";
import Movie from "./Movie.jsx";
import "../App.css";
import { MovieContext } from "../context/MovieContext.jsx";

const TodayMovies = () => {
  const { searchMovie, setSearchMovie, setSelectedMovie } =
    useContext(MovieContext);

  setSelectedMovie(null);
  return (
    <div className="todayMovies-container">
      <div className="searchbar">
        <label htmlFor="searchbar" className="visually-hidden">Sökruta</label>
        <input
          id="searchbar"
          type="text"
          placeholder="Sök film efter titel eller genre..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="search-input"
        />
      </div>
      <Movie />
    </div>
  );
};

export default TodayMovies;
