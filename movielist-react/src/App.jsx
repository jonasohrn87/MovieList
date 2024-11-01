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
import Contact from "./components/Contact.jsx";
import { MovieProvider, MovieContext } from "./context/MovieContext.jsx";
import User from "./components/User.jsx";
// @ts-ignore
import MLlogo from "./assets/MLlogo.png";
import { IoPersonSharp } from "react-icons/io5";

const MovieHeader = () => {
  const { isLoggedIn, user } = useContext(MovieContext);

  let selectAvatar = "avatar " + "avatar-letters";

  return (
    <div>
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
    </div>
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
          <header className="header-container">
            <div className="header-container-inner">
              <img className="logoImage" src={MLlogo} alt="image of logo" />
              <h2>MovieList</h2>
            </div>
            <MovieHeader />
          </header>
          <nav className="menu-container">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/home"
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
              <Route path="/home" element={<TodayMovies />} />
              <Route path="/filmtraffar" element={<MovieNights />} />
              <Route path="/kommande" element={<UpcomingMovies />} />
              <Route
                path="/livecommunitychat"
                element={<LiveCommunityChat />}
              />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/movie/" element={<Movie />} />
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
