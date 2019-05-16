const defaultState = {
  fetchedIds: [],
  error: false
};

export default function fetchMovieSearch(state = defaultState, action) {
  const { type, payload } = action;
  console.log(`inside searchbarReducer and payload is ${type}`);

  switch (type) {

    case 'FETCH_MOVIE_SEARCH_FULFILLED': {
      console.log(`inside searchbarReducer fetchmoviesearchfulfilled and payload is ${payload}`);
      return {
        ...state,
        fetchedIds: [
          ...state.fetchedIds,
          { payload }
        ]
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
