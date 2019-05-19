const axios = require('axios');

export const fetchMovieSearch = (searchInput) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_MOVIE_SEARCH_PENDING' });

    axios.get('/search/', { params: { s: searchInput } })
      .then((res) => {
        dispatch({ type: 'FETCH_MOVIE_SEARCH_FULFILLED', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_MOVIE_SEARCH_REJECTED', payload: err });
      });
  };
};
