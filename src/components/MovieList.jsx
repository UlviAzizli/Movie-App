import React from "react";
import AddFavorite from "./AddFavorite";

function MovieList({ movies, addAndRemove, favoriteComponent }) {
  const FavoriteMovies = favoriteComponent;
  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <div
            className="image-container col-auto d-flex justify-content-start m-3 "
            key={movie.imdbID || index}
          >
            <img src={movie.Poster} alt="movie" className="movie-poster" />
            <div className="movie-info">
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
            </div>

            <div
              onClick={() => addAndRemove(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              {" "}
              <FavoriteMovies />
            </div>
          </div>
        ))}
    </>
  );
}
export default MovieList;
