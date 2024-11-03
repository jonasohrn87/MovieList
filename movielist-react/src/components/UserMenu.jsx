import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext.jsx";
import { IoPersonSharp } from "react-icons/io5";

const UserMenu = () => {
  const { isLoggedIn, user, login, handleLogout } = useContext(MovieContext);
  const [toggleRegisterForm, setToggleRegisterForm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownOutsideClickRef = useRef(null);

  useEffect(() => {
    const handleDropdownOutsideClick = (e) => {
      if (dropdownOutsideClickRef.current && !dropdownOutsideClickRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDropdownOutsideClick);
    return () => document.removeEventListener("mousedown", handleDropdownOutsideClick);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const registerForm = Object.fromEntries(new FormData(e.target));
    const toggleRegisterFetch = toggleRegisterForm ? "register" : "";

    try {
      const response = await fetch(
        `http://localhost:1337/api/auth/local/${toggleRegisterFetch}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerForm),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      login(data.user);
      setIsDropdownOpen(false);
      navigate("/");
    } catch (error) {
      setError("Fel användarnamn eller lösenord");
    }
  };

  const handleLoggedIn = () => {
    if (isLoggedIn && user) {
      return (
        <div className="user-container">
          <p>Användare: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => {
            handleLogout();
            setIsDropdownOpen(false);
          }}>Logga ut</button>
        </div>
      );
    }
  };

  const handleRegister = () => {
    return (
      <div className="user-container">
        {error && <p className="userLoginError">{error}</p>}

        <form onSubmit={handleSubmit}>
          {toggleRegisterForm && (
            <input
              type="text"
              name="username"
              placeholder="Användarnamn"
              required
            />
          )}

          {!toggleRegisterForm && (
            <input
              type="text"
              name="identifier"
              placeholder="Användarnamn eller Email"
              required
            />
          )}

          {toggleRegisterForm && (
            <input type="email" name="email" placeholder="Email" required />
          )}

          <input
            type="password"
            name="password"
            placeholder="Lösenord"
            required
          />

          <button type="submit">
            {toggleRegisterForm ? "Registrera" : "Logga in"}
          </button>

          <button
            type="button"
            onClick={() => setToggleRegisterForm(!toggleRegisterForm)}
          >
            {toggleRegisterForm
              ? "Har redan konto? Logga in"
              : "Inget konto? Registrera"}
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="dropdown-container" ref={dropdownOutsideClickRef}>
      <button 
        className="dropdown-container-active" 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {isLoggedIn && user ? (
          <span className="avatar">
            <IoPersonSharp />
            <span>{user.username.charAt(0).toUpperCase()}</span>
          </span>
        ) : (
          <span className="dropdown-login-btn">Logga in</span>
        )}
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {isLoggedIn ? handleLoggedIn() : handleRegister()}
        </div>
      )}
    </div>
  );
};

export default UserMenu;