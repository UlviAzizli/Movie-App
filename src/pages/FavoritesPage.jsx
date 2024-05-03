import React from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import RemoveFavorite from "../components/RemoveFavorite";

function FavoritesPage({ favorites, removeFavoriteMovie }) {
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="My Favorites" />
      </div>

      <div className="row">
        <MovieList
          movies={favorites}
          // handleFavoriteClick={removeFavoriteMovie}
          addAndRemove={removeFavoriteMovie}
          favoriteComponent={RemoveFavorite}
        />
      </div>
    </div>
  );
}

export default FavoritesPage;
