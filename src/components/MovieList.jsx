import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function MovieList({ movies, addAndRemove, favoriteComponent }) {
  const FavoriteMovies = favoriteComponent;
  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <Fragment key={index}>
            <Link
              to={`/${movie.imdbID}`}
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
                <FavoriteMovies />
              </div>
            </Link>
          </Fragment>
        ))}
    </>
  );
}
export default MovieList;
