import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavorite from "../components/AddFavorite";

function HomePage({ getMovieRequest, movies, setSearchValue, searchValue }) {
  //   const [searchValue, setSearchValue] = useState("");
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
          handleFavoriteClick={() => {}}
          favoriteComponent={AddFavorite}
        />
      </div>
    </div>
  );
}

export default HomePage;
