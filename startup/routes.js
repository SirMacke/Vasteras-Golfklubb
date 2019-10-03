const express = require('express');
const hem = require('../routes/hem');
const login = require('../routes/login');
const admin = require('../routes/admin');
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
  app.use('/login', login);
  app.use('/admin', admin);
  app.use('/klubben', klubben);
  app.use('/medlem', medlem);
  app.use('/gast', gast);
  app.use('/banan', banan);
  app.use('/tavlingar', tavlingar);
  app.use('/foretag', foretag);
  app.use('/shop', shop);
  app.use('/restaurang', restaurang);
}
