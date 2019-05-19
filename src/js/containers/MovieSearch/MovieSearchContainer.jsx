import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchMovieSearch } from './moviesearchActions';

class MovieSearchContainer extends Component {
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
    const { dispatch } = this.props;
    dispatch(fetchMovieSearch(this.state.searchInput));
    this.setState({ searchInput: '' });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
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

        <h3>Results Display</h3>
        {movies.map(movie => (
          <div className='card'>
            <div className='card-body row'>
              <div className='col-4'>
                <img
                  className='img-fluid'
                  src={ movie.poster }
                  alt=''
                />
              </div>
              <div className='col-8'>
                <h5 className='card-title'>{ movie.title }</h5>
                <h6 className='card-subtitle'>{ movie.releaseYear }</h6>
                <hr />
                <p className='card-text'>{ movie.plot }</p>
                <Link to={ `/movie/${movie.id}` } className='btn btn-primary float-right'>More Information</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieSearchContainer;
