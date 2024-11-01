import React, { createContext, useState, useEffect } from "react";

// @ts-ignore
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [reviews, setReviews] = useState([]);
  const [footer, setFooter] = useState([]);

  const [about, setAbout] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchAboutUs = async () => {
      const response = await fetch(
        "http://localhost:1337/api/about-uses?populate=*",
        {}
      );
      const data = await response.json();
      if (data.data) {
        setAbout(data.data);
      }
    };
    fetchAboutUs();
    console.log("Context", about);
  }, []);

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
    const fetchFooter = async () => {
      const response = await fetch(
        "http://localhost:1337/api/footers?populate=*",
        {}
      );
      const data = await response.json();
      if (data.data) {
        setFooter(data.data);
      }
    };
    fetchFooter();
  }, []);


  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const response = await fetch(
  //       "http://localhost:1337/api/reviews?populate=*",
  //       {}
  //     );
  //     const data = await response.json();
  //     if (data.data) {
  //       setReviews(data.data);
  //     }
  //   };
  //   fetchReviews();
  // }, []);

  useEffect(() => {
    checkUserLogin();
  }, []);

  const checkUserLogin = () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        handleLogout();
        return;
      }

      const userToObject = JSON.parse(userData);
      setIsLoggedIn(true);
      setUser(userToObject);
    } catch (error) {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetch(
        "http://localhost:1337/api/contact-info?populate=*",
        {}
      );
      const data = await response.json();
      if (data.data) {
        setContactInfo(data.data);
      }
    };
    fetchContactInfo();
  }, [false]);

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
        footer,

        about,

        isLoggedIn,
        user,
        login,
        handleLogout,
        checkAuthStatus: checkUserLogin,
        contactInfo,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
