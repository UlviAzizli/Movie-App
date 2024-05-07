import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  // const FavoriteMovies = favoriteComponent;
  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <Fragment key={index}>
            <Link
              to={`/${movie.imdbID}`}
              className="image-container col-auto d-flex justify-content-start m-3 "
              key={movie.imdbID || index}
              style={{ textDecoration: "none" }}
            >
              <div>
                <img
                  src={movie.Poster}
                  alt="movie"
                  className="movie-poster"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center", // Ensures the image covers the area without distorting aspect ratio
                  }}
                />
              </div>
              {/* <img src={movie.Poster} alt="movie" className="movie-poster" /> */}
              <div
                className="movie-info"
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
            </Link>
          </Fragment>
        ))}
    </>
  );
}
export default MovieList;
