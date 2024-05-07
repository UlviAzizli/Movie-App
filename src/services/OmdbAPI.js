import axios from "axios";

class OmdbAPI {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_OMDB_API_URL,
    });
    this.api.interceptors.request.use((config) => {
      config.params = {
        apikey: import.meta.env.VITE_OMDB_API_KEY,
        ...config.params,
      };
      return config;
    });
  }
  getMovieBySearchInput(searchInput) {
    return this.api.get("/", { params: { s: searchInput } });
  }
  getMovieByID(movieID) {
    return this.api.get("/", { params: { i: movieID } });
  }
}

const omdbAPI = new OmdbAPI();
export default omdbAPI;
