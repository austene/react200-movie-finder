import React from 'react';

import {
  fetchMovieSearch,
} from './searchbarActions';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };

    this.handleSearchbarChange = this.handleSearchbarChange.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
  }

  handleSearchbarChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSearchBtnClick() {
    console.log(this.props);
    const { dispatch } = this.props;
    console.log(`dispatch is ${dispatch}`);
    dispatch(fetchMovieSearch(this.state.searchInput));
    this.setState({ searchInput: '' });
    console.log('hello~');
  }

  render() {
    const { fetchedIds } = this.props;
    return (
      <div className='form-group'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            id='searchbar'
            placeholder='Search for a Movie'
            aria-label='search for a movie'
            aria-describedby='city searchbar'
            value={ this.state.searchInput }
            onChange={ this.handleSearchbarChange }
          />
          <div className='input-group-append'>
            <button
              type='button'
              className='btn btn-outline-secondary'
              id='searchbar-btn'
              onClick={ this.handleSearchBtnClick }
            >Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Searchbar;
