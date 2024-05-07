import React from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import RemoveFavorite from "../components/RemoveFavorite";
import AddAndRemove from "../components/AddAndRemove";

function FavoritesPage({ favorites, setFavorites }) {
  const removeFavoriteMovie = async (movie) => {
    try {
      const response = await fetch(
        `https://my-movie-app.adaptable.app/favorites/${movie.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setFavorites(favorites.filter((favorite) => favorite.id !== movie.id));
      } else {
        console.error("Failed to remove favorite movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error removing favorite movie:", error);
    }
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="My Favorites" />
      </div>

      <div className="row">
        <AddAndRemove
          movies={favorites}
          addAndRemove={removeFavoriteMovie}
          favoriteComponent={RemoveFavorite}
        />
      </div>
    </div>
  );
}

export default FavoritesPage;
