import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './layout/Header';
import MovieSearchContainer from './containers/MovieSearch';
import MovieDetailContainer from './containers/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id='app' />
        <div className='container'>
          <Header />
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}
