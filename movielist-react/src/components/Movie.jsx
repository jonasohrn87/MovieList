import React from "react";
import "../App.css";

const Movie = (movie) => {
  console.log(movie);
  return (
    <div className="movies-grid">
      <div key={movie.movie.id} className="movie-card">
        <h2>{movie.movie.title}</h2>
        {movie.movie.poster && (
          <img
            src={`http://localhost:1337${movie.movie.poster.url}`}
            alt={`${movie.movie.title} poster`}
            className="movie-poster"
          />
        )}
        <p className="movie-description">{movie.movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;
