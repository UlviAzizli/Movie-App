import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=b1f9a36e`;

    const response = await fetch(URL);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("our-app-favorites")
    );
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("our-app-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addFavoriteMovie={addFavoriteMovie}
              getMovieRequest={getMovieRequest}
              movies={movies}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              removeFavoriteMovie={removeFavoriteMovie}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
