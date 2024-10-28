import React, { useEffect, useState } from "react";
import "../App.css";

const TodayMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

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
    .filter((movie) =>
      movie.title?.toLowerCase().includes(searchMovie.toLowerCase())
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
      <div className="movies-grid">
        {searchFilter.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            {movie.poster && (
              <img
                src={`http://localhost:1337${movie.poster.url}`}
                alt={`${movie.title} poster`}
                className="movie-poster"
              />
            )}
            <p className="movie-description">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayMovies;