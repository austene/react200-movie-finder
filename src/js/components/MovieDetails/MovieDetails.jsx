import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = () => (
  <div className='container'>
    {/* <h5>MovieDetails</h5> */}
    <div className='row'>
      <div className='col-12'>
        <Link to='/'>Go Back</Link>
      </div>
    </div>

    <div className='row'>
      <div className='col-6'>
        <div className='card'>
          <div className='card-body'>
            <h6>Poster</h6>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card'>
          <div className='card-header text-white bg-primary'>Movie Details</div>
          <div className='card-body'>
            <h5 className='card-title font-weight-bold'>Title</h5>
            <span className='badge badge-pill badge-success m-2'>Release_Year</span>
            <span className='badge badge-pill badge-success m-2'>Length</span>
            <span className='badge badge-pill badge-success m-2'>Category</span>
            <p>Plot</p>
            <p>Awards</p>
            <p className='font-weight-bold'>MetaScore:
              <br />
              <span>IMDB:</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetails;
