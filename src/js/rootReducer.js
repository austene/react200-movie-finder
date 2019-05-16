import { combineReducers } from 'redux';
import searchbarReducer from './components/Searchbar/searchbarReducer';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
});

export default rootReducer;
