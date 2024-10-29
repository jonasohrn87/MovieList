import React, { createContext, useState, useEffect } from "react";

// @ts-ignore
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        "http://localhost:1337/api/reviews?populate=*",
        {}
      );
      const data = await response.json();
      if (data.data) {
        setReviews(data.data);
      }
    };
    fetchReviews();
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

  const handleMovieClick = (movie) => {
    console.log("Clicked movie:", movie);
    setSelectedMovie(movie);
  };

  const searchReviews = reviews
    .filter(
      (review) =>
        review.title?.toLowerCase().includes(searchMovie.toLowerCase()) ||
        review.genre.some((genre) =>
          genre.toLowerCase().includes(searchMovie.toLowerCase())
        )
    )
    .sort((a, b) => a.title.localeCompare(b.title));
  
  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        handleMovieClick,
        movies,
        searchMovie,
        setSearchMovie,
        searchFilter,
        reviews,
        searchReviews,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
