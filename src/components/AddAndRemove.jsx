import React from "react";
// import { Link } from "react-router-dom";

export default function AddAndRemove({
  movies,
  addAndRemove,
  favoriteComponent,
}) {
    const FavoriteMovies = favoriteComponent;
  if (!Array.isArray(movies)) {
    console.error("Expected movies to be an array", movies);
    return null; // Or render an error message or fallback UI
  }

  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="image-container col-auto d-flex justify-content-start m-3"
          key={movie.imdbID || index}
        >
          <img src={movie.Poster} alt="movie" className="movie-poster" />
          <div className="movie-info">
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
          <div
            onClick={() => addAndRemove(movie)}
            key={index}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteMovies />
          </div>
        </div>
      ))}
    </>
  );
}
