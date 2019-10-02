const express = require('express');
const hem = require('../routes/hem');
const klubben = require('../routes/klubben');
const medlem = require('../routes/medlem');
const gast = require('../routes/gast');
const banan = require('../routes/banan');
const tavlingar = require('../routes/tavlingar');
const foretag = require('../routes/foretag');
const shop = require('../routes/shop');
const restaurang = require('../routes/restaurang');


module.exports = function(app) {
  app.set('view engine', 'pug');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use('/', hem);
  app.use('/hem', hem);
  app.use('/hem', klubben);
  app.use('/hem', medlem);
  app.use('/hem', gast);
  app.use('/hem', banan);
  app.use('/hem', tavlingar);
  app.use('/hem', foretag);
  app.use('/hem', shop);
  app.use('/hem', restaurang);
}
