import React from "react";

function MovieList(props) {
  const FavoriteMovies = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container col-auto d-flex justify-content-start m-3 "
          key={movie.imdbID || index}
        >
          <img src={movie.Poster} alt="movie" className="movie-poster" />
          <div
            onClick={() => props.handleFavoriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteMovies />
          </div>
        </div>
      ))}
    </>
  );
}
export default MovieList;
