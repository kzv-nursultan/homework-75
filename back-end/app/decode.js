const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();
router.use(express.json());

router.post('/', (req,res)=>{
    fileDb.addItemDecoded(req.body);
    res.send(req.body);
});

router.get('/', (req,res)=>{
    const data = fileDb.getItems();
    const messages = {
        decoded:data.decoded
    };
    res.send(messages);
});

module.exports = router;