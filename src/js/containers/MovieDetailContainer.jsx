import React, { Component } from 'react';

import MovieDetails from '../components/MovieDetails/MovieDetails';

class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MovieDetails />
        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default MovieDetailContainer;
