import { combineReducers } from 'redux';
import moviesearchReducer from './containers/MovieSearch/moviesearchReducer';

const rootReducer = combineReducers({
  moviesearch: moviesearchReducer,
});

export default rootReducer;
