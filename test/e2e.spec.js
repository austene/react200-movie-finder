/* global define, it, describe, beforeEach, document */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/js/app';
import { fetchMovieSearch } from '../src/js/containers/MovieSearch/moviesearchActions';

const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');


let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

// app.listen(8888);

const url = 'http://localhost:8888';


describe('express', function () {
  this.timeout(12000);
  let httpServer = null;
  let pageObject = null;

  beforeEach(() => {
    nightmare = new Nightmare();
  });

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

  it('should have the correct page title', () => {
    return pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .end()
    .then(text => expect(text).to.equal('Movie Finder'));
  });

  it('should contain an <input> element with the id of "searchbar"', () => {
    return pageObject
    .evaluate(() => document.querySelector('input[id=searchbar]').innerText)
    .then(input => expect(input).to.not.be.null);
  });

  it('should contain a <button> element with an id of "searchbar-btn"', () => {
    return pageObject
    .evaluate(() => document.querySelector('#searchbar-btn').innerText)
    .then(button => expect(button).to.exist);
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

