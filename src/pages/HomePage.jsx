import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavorite from "../components/AddFavorite";
import omdbAPI from "../services/OmdbAPI";

function HomePage({ addFavoriteMovie }) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getInitialMovies = async () => {
      try {
        const currentYear = new Date().getFullYear().toString();
        const response = await omdbAPI.getMovieBySearchInput(currentYear);
        console.log(response);

        const sortedMovies = response.data.Search.sort(
          (a, b) => b.Year - a.Year
        );
        setMovies(sortedMovies || []);
      } catch (error) {
        console.error("Error fetching initial movies:", error);
      }
    };

    getInitialMovies();
  }, []);

  const getMovieRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await omdbAPI.getMovieBySearchInput(searchValue);
      console.log(response);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox
          onSubmit={getMovieRequest}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default HomePage;
