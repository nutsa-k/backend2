
const mongoose = require('mongoose')

process.env.NODE_ENV = process.env.NODE_ENV
|| 'development';

const env = require('./config/' +
process.env.NODE_ENV + '.js')

exports.init =function() {
    mongoose.connect(env.db,
        {useNewUrlParser: true, useUnifiedTopology:true}
        );
    }