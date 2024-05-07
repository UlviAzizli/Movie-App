import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import omdbAPI from "../services/OmdbAPI";
import AddAndRemove from "../components/AddAndRemove";
import AddFavorite from "../components/AddFavorite";

export default function MovieDetails({ addFavoriteMovie }) {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    omdbAPI.getMovieByID(movieID).then((resp) => {
      setMovie(resp.data || null);
    });
  }, [movieID]);

  if (!movie)
    return (
      <div className="text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="container mt-4">
      <div className="card mb-3" style={{ maxWidth: "1040px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <AddAndRemove
              movies={[movie]}
              addAndRemove={addFavoriteMovie}
              favoriteComponent={AddFavorite}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {movie.Title} ({movie.Year})
              </h3>
              <p className="card-text">
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p className="card-text">
                <strong>Director:</strong> {movie.Director}
              </p>
              <p className="card-text">
                <strong>Writer:</strong> {movie.Writer}
              </p>
              <p className="card-text">
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p className="card-text">
                <strong>Plot:</strong> {movie.Plot}
              </p>
              <p className="card-text">
                <strong>Language:</strong> {movie.Language}
              </p>
              <p className="card-text">
                <strong>Country:</strong> {movie.Country}
              </p>
              <p className="card-text">
                <strong>Awards:</strong> {movie.Awards}
              </p>
              <p className="card-text">
                <strong>IMDb Rating:</strong> {movie.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
