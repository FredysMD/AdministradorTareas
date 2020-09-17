const mysql = require('mysql');

const conexion = mysql.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'administrador_tareas'

});

conexion.connect((err)=>{

    if(!err)
        console.log('Conexion exitosa!');
    else
        console.log('Falló la conexion: '+ JSON.stringify(err,undefined,2));

});

module.exports = conexion;