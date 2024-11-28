const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const port = process.env.port;



const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('WellCome to owr hotel')
})


const personRoutes = require('./Routes/personRoutes');
const menuRoutes = require('./Routes/menuRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(port,()=>{
    console.log('server lising on 3000 port no ')
});

