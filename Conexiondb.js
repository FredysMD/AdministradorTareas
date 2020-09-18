const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'administradortareasdb'
});

conexion.connect((err)=>{

    if(!err)
        console.log('Conexión exitosa!');
    else
        console.log('Falló la conexión: '+ JSON.stringify(err,undefined,2));

});

module.exports = conexion;