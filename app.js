var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var coursesRouter = require('./routes/courses');
const productsRouter = require('./routes/products');
const mongoose = require('mongoose')
const config = require('./config') 
config.init()

mongoose.connect('mongodb://0.0.0.0:27017/cs3051',
    {useNewUrlParser:true, useUnifiedTopology:true})




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/api/products', productsRouter);

module.exports = app;