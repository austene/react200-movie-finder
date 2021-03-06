/* global define, it, describe, beforeEach, document */
import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App from '../src/js/app';
import { fetchMovieSearch } from '../src/js/containers/MovieSearch/moviesearchActions';

const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require("nightmare-react-utils").Actions;

Nightmare.action(...Actions);
// let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

// app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('express', function () {
  this.timeout(12000);
  let httpServer = null;
  let pageObject = null;

  // beforeEach(() => {
  //   nightmare = new Nightmare();
  // });

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

describe('fetchMovies', () => {
  it('should return a function for fetchMovieSearch', (done) => {
    const movie = fetchMovieSearch('Timecop');
    expect(movie).to.be.a('function');
    done();
  });
});

describe('App Component', function () {
  this.timeout(6500);
  this.slow(3000);

  it('should shallow render', () => {
    expect(shallow(<App />).contains(<div id='app' />)).to.equal(true);
  });
});

