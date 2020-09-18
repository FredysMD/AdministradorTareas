const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index');
});

router.get('/nueva-tarea',(req,res) => {
    res.render('nueva-tarea');
});


module.exports = router;

