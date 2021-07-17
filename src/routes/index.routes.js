const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/shop', (req, res) => {
  res.render('shop');
});

module.exports = routes;