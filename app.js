var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const config = require('./config')
config.init()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var coursesRouter = require('./routes/courses');
const productsRouter = require('./routes/products');
const mongoose = require('mongoose')
const config = require('./config') 
config.init()

mongoose.connect('mongodb://0.0.0.0:27017/cs3051',
    {useNewUrlParser:true, useUnifiedTopology:true})




var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',productsRouter);
app.use('/courses', coursesRouter);
app.use('/api/products', productsRouter);

module.exports = app;