import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { MovieContext } from "../context/MovieContext.jsx";

const Movie = () => {
  const { searchFilter, handleMovieClick, selectedMovie } =
    useContext(MovieContext);

  return (
    <div className="movies-grid">
      {selectedMovie ? (
        <div key={selectedMovie.id} className="movie-card">
          <h2>{selectedMovie.title}</h2>
          {selectedMovie.poster && (
            <img
              src={`http://localhost:1337${selectedMovie.poster.url}`}
              alt={`${selectedMovie.title} poster`}
              className="movie-poster"
            />
          )}
          <p className="movie-description">{selectedMovie.description}</p>
          <p className="movie-review">{selectedMovie.review}</p>
        </div>
      ) : (
        searchFilter.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            {movie.poster && (
              <img
                src={`http://localhost:1337${movie.poster.url}`}
                alt={`${movie.title} poster`}
                className="movie-poster"
              />
            )}
            <p className="movie-description">
              {movie.description.substring(0, 200) + "..."}
              <NavLink
                to={"/movie"} //{`/movie/${movie.id}-${movie.title}`}
                end
                onClick={() => handleMovieClick(movie)}
              >
                Läs mer ➡️
              </NavLink>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Movie;
