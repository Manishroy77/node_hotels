const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.mongoUrlLocal;
// const mongoUrl = process.env.mongoUrlOnline;
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database connect succesfully')
})

module.exports = db;