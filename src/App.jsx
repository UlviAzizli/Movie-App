import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ContactInfoPage from "./components/ContactInfoPage";
import MovieDetails from "./pages/MovieDetails";
import axios from "axios";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteMovie = async (movie) => {
    try {
      const response = await axios.post(
        "https://my-movie-app.adaptable.app/favorites",
        movie,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const newFavorite = await response.data;
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
      const response = await axios.get(
        "https://my-movie-app.adaptable.app/favorites"
      );
      if (response.status === 200) {
        const newFavorite = response.data;
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
  }, [favorites]);

  return (
    <div className="container-fluid movie-app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage addFavoriteMovie={addFavoriteMovie} />}
        />
        <Route
          path="/:movieID"
          element={<MovieDetails addFavoriteMovie={addFavoriteMovie} />}
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/contact-info" element={<ContactInfoPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// "/" <HomePage />
// "/movies" <Movies />
// "/movies/:movideID" <MovieDetails />
