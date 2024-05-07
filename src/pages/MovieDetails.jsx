import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import omdbAPI from "../services/OmdbAPI";
import AddFavorite from "../components/AddFavorite";
import MovieList from "../components/MovieList";

export default function MovieDetails({ addAndRemove }) {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    omdbAPI.getMovieByID(movieID).then((resp) => setMovie(resp.data));
  }, [movieID]);

  if (!movie) return "Loading...";

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col">
          <h1>{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
}
