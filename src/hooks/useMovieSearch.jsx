import { useState, useEffect } from "react";

export function useMovieSearch(searchValue) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieRequest = async () => {
      const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=b1f9a36e`;

      const response = await fetch(URL);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };

    if (searchValue) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return movies;
}
