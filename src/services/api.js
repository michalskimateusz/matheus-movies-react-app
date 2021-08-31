import axios from "axios";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

const api = axios.create({
  baseURL: baseUrl,
  responseType: 'json'
});

export default api;