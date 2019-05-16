const axios = require('axios');

export function fetchMovieSearch(searchInput) {
  console.log(`inside searchbarActions and searchInput is ${searchInput}`);
  return {
    type: 'FETCH_MOVIE_SEARCH_FULFILLED',
    payload: searchInput
  };
}

// export const fetchMovieSearch = (searchInput) => {
//   return (dispatch) => {
//     console.log(`inside searchbarActions fetchMovieSearch and searchInput is ${searchInput}`);
//     dispatch({ type: 'FETCH_MOVIE_SEARCH_PENDING' });
//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then((res) => {
//         dispatch({ type: 'FETCH_MOVIE_SEARCH_FULFILLED', payload: res });
//       })
//       .catch((err) => {
//         dispatch({ type: 'FETCH_MOVIE_SEARCH_REJECTED', payload: err });
//       });
//   };
// };
