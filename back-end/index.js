const express = require('express');
const cors = require('cors');
const app = express();
const fileDb = require('./fileDb');
const decode = require('./app/decode');
const encode = require('./app/encode');

app.use(express.json());
app.use(cors());

fileDb.init();

const port = 8000;

app.use('/decode', decode);
app.use('/encode', encode);


app.listen(port,()=>{
    console.log('server started on ' + port);
});