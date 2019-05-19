const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/', (req, res) => {
  const searchInput = req.query.s;
  axios.get(`https://www.omdbapi.com/?s=${searchInput}&apikey=${process.env.API_KEY}&type=movie`)
    .then(data => data.data.Search)
    .then(movies =>
      Promise.all(movies.map(movie =>
        axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.API_KEY}`)
        .then(response => response.data)
      ))
        .then(data => res.send(data))
    )
    .catch(err => console.log(err));
});

module.exports = app;
