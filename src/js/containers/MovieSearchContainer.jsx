import React, { Component } from 'react';

import Searchbar from '../components/Searchbar/Searchbar';
import ResultsDisplay from '../components/ResultsDisplay/ResultsDisplay';

class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <h3>Movie Search Container</h3> */}
        <Searchbar />
        <ResultsDisplay
          // resultsMovies={ this.state.resultsMovies }
        />
      </div>
    );
  }
}

export default MovieSearchContainer;
