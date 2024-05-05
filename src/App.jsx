import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteMovie = async (movie) => {
    try {
      const response = await fetch(
        "https://my-movie-app.adaptable.app/favorites",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movie),
        }
      );
      console.log(response);
      if (response.ok) {
        const newFavorite = await response.json();
        setFavorites([...favorites, newFavorite]);
      } else {
        console.error("Failed to add favorite movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding favorite movie:", error);
    }
  };

  const getFavoriteMovie = async () => {
    try {
      const response = await fetch(
        "https://my-movie-app.adaptable.app/favorites"
      );
      if (response.ok) {
        const newFavorite = await response.json();
        setFavorites(newFavorite);
      } else {
        console.error("Failed to add favorite movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding favorite movie:", error);
    }
  };

  useEffect(() => {
    getFavoriteMovie();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage addFavoriteMovie={addFavoriteMovie} />}
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
