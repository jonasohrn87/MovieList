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
        <h2>Våra filmer</h2>
        <input
          type="text"
          placeholder="Sök filmer..."
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
