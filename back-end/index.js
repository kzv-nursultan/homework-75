const express = require('express');
const cors = require('cors');
const app = express();
const fileDb = require('./fileDb');

app.use(express.json());
app.use(cors());
const Vigenere = require('caesar-salad').Vigenere;

fileDb.init();

const port = 8000;

app.post('/encode',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

app.get('/encode',(req,res)=>{
    const data = fileDb.getItems();
    const messages = {
        encoded:Vigenere.Cipher(data.password).crypt(data.message),
    };
    res.send(messages);
});


app.post('/decode',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

app.get('/decode',(req,res)=>{
    const data = fileDb.getItems();
    console.log('ondecode',data);
    const messages = {
        decoded:Vigenere.Decipher(data.password).crypt(data.message)
    };
    res.send(messages);
});


app.listen(port,()=>{
    console.log('server started on ' + port);
});