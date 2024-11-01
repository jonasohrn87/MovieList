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
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import { MovieProvider, MovieContext } from "./context/MovieContext.jsx";
import User from "./components/User.jsx";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";

const MovieHeader = () => {
  const { isLoggedIn, user } = useContext(MovieContext);

  let selectAvatar = "avatar " + "avatar-letters";

  return (
    <header className="header-container">
      <div className="header-container-inner">
        <BiSolidCameraMovie />
        <h4>MovieList</h4>
      </div>
      <p>Dark Mode</p>
      <div>
        <NavLink to="/user">
          {isLoggedIn ? (
            <span className={selectAvatar}>
              <IoPersonSharp />
              {user.username.charAt(0).toUpperCase()}
            </span>
          ) : (
            <button>Logga in</button>
          )}
        </NavLink>
      </div>
    </header>
  );
};

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
          <MovieHeader />
          <nav className="menu-container">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Hem
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/filmtraffar"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Filmträffar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/topplistor"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Topplistor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kommande"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Kommande
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recensioner"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Recensioner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/livecommunitychat"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Live community chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Kontakt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/omoss"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Om oss
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<TodayMovies />} />
              <Route path="/filmtraffar" element={<MovieNights />} />
              <Route path="/kommande" element={<UpcomingMovies />} />
              <Route
                path="/livecommunitychat"
                element={<LiveCommunityChat />}
              />
              <Route path="/movie" element={<Movie />} />
              <Route path="/recensioner" element={<Reviews />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
