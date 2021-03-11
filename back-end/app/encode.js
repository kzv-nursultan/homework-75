const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();
router.use(express.json());


router.post('/',(req,res)=>{
    fileDb.addItem(req.body);
    res.send(req.body);
});

router.get('/',(req,res)=>{
    fileDb.init();
    const data = fileDb.getItems();
    const messages = {
        encoded:data.encoded,
    };
    res.send(messages);
});

module.exports = router;