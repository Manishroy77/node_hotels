const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/Hotel';
// const mongoUrl = 'mongodb+srv://roy:admin@cluster0.g3iiw.mongodb.net/Hotel'
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database connect succesfully')
})

module.exports = db;