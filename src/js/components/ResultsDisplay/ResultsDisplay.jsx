import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Results Display</h3>
        <div className='card'>
          <div className='card-body row'>
            <div className='col-4'>
              {/* <img
                className='img-fluid'
                src='xxx'
                alt='xxx'
              >Poster Here!
              </img> */}
            </div>
            <div className='col-8'>
              <h5 className='card-title'>Movie Title</h5>
              <h6 className='card-subtitle'>Release Year</h6>
              <hr />
              <p className='card-text'>Plot</p>
              <Link to='/movie/:movieId' className='btn btn-primary float-right'>More Information</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsDisplay;
