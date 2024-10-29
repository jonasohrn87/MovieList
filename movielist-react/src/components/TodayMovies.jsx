import React, { useEffect, useState } from "react";
import Movie from "./Movie.jsx";
import "../App.css";

const TodayMovies = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const handleClick = (movie) => {
    onMovieClick(movie);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "http://localhost:1337/api/movies?populate=*",
        {}
      );
      const data = await response.json();
      if (data.data) {
        setMovies(data.data);
      }
    };
    fetchMovies();
  }, []);

  const searchFilter = movies
    .filter(
      (movie) =>
        movie.title?.toLowerCase().includes(searchMovie.toLowerCase()) ||
        movie.genre.some((genre) =>
          genre.toLowerCase().includes(searchMovie.toLowerCase())
        )
    )
    .sort((a, b) => a.title.localeCompare(b.title));

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
      <Movie filter={searchFilter} handleClick={handleClick} />
    </div>
  );
};

export default TodayMovies;
