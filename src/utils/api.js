import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

// eslint-disable-next-line no-unused-vars
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});
