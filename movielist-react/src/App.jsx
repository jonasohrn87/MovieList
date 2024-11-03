import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import TodayMovies from "./components/TodayMovies.jsx";
import MovieNights from "./components/MovieNights.jsx";
import UpcomingMovies from "./components/UpcomingMovies.jsx";
import LiveCommunityChat from "./components/LiveCommunityChat.jsx";
import Movie from "./components/Movie.jsx";
// import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import { MovieProvider, MovieContext } from "./context/MovieContext.jsx";
// @ts-ignore
import MLlogo from "./assets/MLlogo.png";
import UserMenu from "./components/UserMenu.jsx";
import DesktopNavigation from "./components/DesktopNavigation.jsx";
import MobileNavigation from "./components/MobileNavigation.jsx";
import ToggleDarkMode from "./components/ToggleDarkMode.jsx";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    console.log("Clicked movie:", movie);
    setSelectedMovie(movie);
  };
  return (
    <MovieProvider>
      <Router>
        <div className="main-container">
          <header className="header-container">
            <div className="header-container-inner">
              <img className="logoImage" src={MLlogo} alt="image of logo" />
              <h2>MovieList</h2>
            </div>
            <div className="darkModeAndUser-container">
              <ToggleDarkMode />
              <UserMenu />
            </div>
            </header>
            <DesktopNavigation />
            <MobileNavigation />

          <div className="main-content">
            <Routes>
              <Route path="/home" element={<TodayMovies />} />
              <Route path="/filmtraffar" element={<MovieNights />} />
              <Route path="/kommande" element={<UpcomingMovies />} />
              <Route
                path="/livecommunitychat"
                element={<LiveCommunityChat />}
              />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/movie/" element={<Movie />} />
              {/* <Route path="/recensioner" element={<Reviews />} /> */}
              <Route path="/omoss" element={<AboutUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
