const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging.js')();
require('./startup/routes.js')(app);
require('./startup/db.js')();
require('./startup/validation.js')();

var port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
