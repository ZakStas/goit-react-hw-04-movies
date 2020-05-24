import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "51332cebe57c2ac91074178ad3076c6c";

export const getPopularFilms = () =>
  axios.get(BASE_URL + `trending/all/day?api_key=${KEY}`);

export const getFilmWithId = id =>
  axios
    .get(BASE_URL + `movie/${id}?api_key=${KEY}`)
    .then(response => response.data);

export const getFilmCast = id =>
  axios
    .get(BASE_URL + `movie/${id}/credits?api_key=${KEY}`)
    .then(response => response.data);

export const getFilmReviews = id =>
  axios
    .get(BASE_URL + `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1)`)
    .then(response => response.data);

export const getFilmByQuery = query =>
  axios
    .get(
      BASE_URL +
        `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(response => response.data);