'use strict'
const express         = require('express');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const methodOverride  = require('method-override');
const homeRoute       = require('./routes/home');
const beerAPIRoute    = require('./routes/beer_api');
const userRoute       = require('./routes/user');
const request         = require('request');
const app             = express();
const feedbackRoute   = require('./routes/feedback');
const port            = process.env.PORT || 3000;
app.set('views',path.join(__dirname, 'views'));
// Adding session as a middleware
 app.use(session({
  saveUninitialized: true,
  resave: true,
   secret: 'sooopersekret',
   cookie: {maxAge: 60000}
 }));

// // Adding Method override to allow our form to delete
 app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
 app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')))

app.use('/', homeRoute);
app.use('/api',beerAPIRoute);

app.use('/user', userRoute);
app.use('/feedback', feedbackRoute);
app.listen(port, function() {
  console.log('Server is listening on ',port);
})
