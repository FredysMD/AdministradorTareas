const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');


app.use(bodyparser.json());
app.use(require('./api/tarea'));
app.set('views',path.join(__dirname,'views'));


// Estableciendo el motor de plantillas
app.set('view engine','ejs');

// rutas
app.use('/', require('./routes/rutas'));


app.listen(3000,()=>{    
    console.log("Puerto: 3000");
});