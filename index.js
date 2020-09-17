const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(require('./Crudtarea.js'));

app.listen(3000,()=>{    
    console.log("Puerto: 3000");
});