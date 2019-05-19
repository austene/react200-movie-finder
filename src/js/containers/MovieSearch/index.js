import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    movies: store.moviesearch.movies,
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
