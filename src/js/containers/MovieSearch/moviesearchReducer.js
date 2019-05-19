const initialState = {
  movies: [],
  error: false
};

export default function movieSearchReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'FETCH_MOVIE_SEARCH_FULFILLED': {
      return {
        ...state,
        movies: payload.map(eachMovie => ({
          id: eachMovie.imdbID,
          title: eachMovie.Title,
          releaseYear: eachMovie.Year,
          plot: eachMovie.Plot,
          poster: eachMovie.Poster,
          length: eachMovie.Runtime,
          genre: eachMovie.Genre,
          awards: eachMovie.Awards,
          metascore: eachMovie.Metascore,
          imdbRating: eachMovie.imdbRating
        }))
      };
    }
    case 'FETCH_MOVIE_SEARCH_REJECTED': {
      return {
        ...state,
        error: true
      };
    }

    default: {
      return state;
    }
  }
}

