import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext.jsx";

const User = () => {
  const { isLoggedIn, user, login, handleLogout } = useContext(MovieContext);
  const [toggleRegisterForm, setToggleRegisterForm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      setError("Fel användarnamn eller lösenord");
    }
  };

  if (isLoggedIn && user) {
    return (
      <div className="user-container">
        <p>Användare: {user.username}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Logga ut</button>
      </div>
    );
  }

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

export default User;
