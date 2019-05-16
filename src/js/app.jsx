import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './layout/Header';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

export default class App extends Component {
  render() {
    console.log(`inside app.jsx and this.props is ${this.props}`);
    return (
      <Router>
        <div className='container'>
          <Header />
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}
