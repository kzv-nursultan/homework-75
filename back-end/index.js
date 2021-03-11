const express = require('express');
const app = express();
const fileDb = require('./fileDb');

fileDb.init();

const port = 8000;

app.post('/decode',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

app.get('/decode',(req,res)=>{
    const data = fileDb.getItem();
    res.send(data);
});

app.get('/encode',(req,res)=>{
    const data = fileDb.getItem();
    res.send(data);
});

app.post('/encode',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});


app.listen(port,()=>{
    console.log('server started on ' + port);
});