import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavorite from "../components/AddFavorite";

function HomePage({ addFavoriteMovie }) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=b1f9a36e`
      );
      const data = await response.json();
      if (response.ok) {
        setMovies(data.Search || []);
      } else {
        console.error("Failed to fetch movies:", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList
          movies={movies}
          addAndRemove={addFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </div>
    </div>
  );
}

export default HomePage;
