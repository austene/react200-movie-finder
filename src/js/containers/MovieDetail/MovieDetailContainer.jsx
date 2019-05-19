import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match, movies } = this.props;
    const selectedMovie = movies.filter(item => item.id == match.params.id);
    const movie = selectedMovie[0];
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Link to='/'>Go Back</Link>
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <div className='card'>
                <div className='card-body'>
                  <img
                    className='img-fluid'
                    src={ movie.poster }
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-header text-white bg-primary'>Movie Details</div>
                <div className='card-body'>
                  <h5 className='card-title font-weight-bold'>{ movie.title }</h5>
                  <span className='badge badge-pill badge-success m-2'>{ movie.releaseYear }</span>
                  <span className='badge badge-pill badge-success m-2'>{ movie.length }</span>
                  <span className='badge badge-pill badge-success m-2'>{ movie.genre }</span>
                  <p>{ movie.plot }</p>
                  <p>{ movie.awards }</p>
                  <p className='font-weight-bold'>MetaScore: { movie.metascore }
                    <br />
                    <span>IMDB: { movie.imdbRating }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailContainer;
