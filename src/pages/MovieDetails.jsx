import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import omdbAPI from "../services/OmdbAPI";
import AddFavorite from "../components/AddFavorite";
import AddAndRemove from "../components/AddAndRemove";

export default function MovieDetails({ addFavoriteMovie }) {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    omdbAPI.getMovieByID(movieID).then((resp) => {
      if (resp.data) {
        setMovie([resp.data]); // Wrap in an array
      } else {
        setMovie([]); // Ensure it's still an array even if no data
      }
    });
  }, [movieID]);

  if (!movie) return "Loading...";

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <AddAndRemove
          movies={movie}
          addAndRemove={addFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </div>
    </div>
  );
}
