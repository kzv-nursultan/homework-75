const express = require('express');
const cors = require('cors');
const app = express();
const fileDb = require('./fileDb');


app.use(express.json());
app.use(cors());

fileDb.init();

const port = 8000;

app.post('/encode',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

app.get('/encode',(req,res)=>{
    fileDb.init();
    const data = fileDb.getItems();
    const messages = {
        encoded:data.encoded,
    };
    res.send(messages);
});

app.post('/decode',(req,res)=>{
    fileDb.addItemDecoded(req.body);
    res.send(req.body);
});

app.get('/decode',(req,res)=>{
    fileDb.init();
    const data = fileDb.getItems();
    const messages = {
        decoded:data.decoded
    };
    res.send(messages);
});


app.listen(port,()=>{
    console.log('server started on ' + port);
});