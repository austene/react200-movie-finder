import { connect } from 'react-redux';
import Searchbar from '../Searchbar';

function mapStoreToProps(store) {
  return {
    fetchedIds: store.searchbar.fetchedIds,
  };
}

export default connect(mapStoreToProps)(Searchbar);
