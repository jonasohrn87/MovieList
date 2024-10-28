import React from "react";
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

function App() {
  return (
    <Router>
      <div className="main-container">
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
            <Route path="/livecommunitychat" element={<LiveCommunityChat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
