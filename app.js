const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const index = require('./routes/index');
const admin = require('./routes/admin');
const logger = require('morgan');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery`))
app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap`));
app.use('/', index);
app.use('/admin', admin);
module.exports = app;
