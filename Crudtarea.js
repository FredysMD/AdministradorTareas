const express = require('express');
const conexion = require('./database.js');

var app = express();


//listar todas las tareas
app.get('/tareas', (req,res) => {
    
    var consulta = 'SELECT * FROM tarea';

    conexion.query(consulta,(err,rows,fields)=>{

        if(!err)
            res.send(rows);
        else
            console.log(err);
    })

});

//listar una tarea 
app.get('/tareas/:id', (req,res) => {
    
    var consulta = 'SELECT * FROM tarea WHERE id=?';
    
    conexion.query(consulta,[req.params.id],(err,rows,fields)=>{

        if(!err)
            res.send(rows);
        else
            console.log(err);
    })

});

// Crear tarea
app.post('/tareas', (req,res) =>{
    
    let nueva_tarea = req.body;
    var consulta = 'INSERT INTO tarea(titulo,estado,fecha_entrega,hora_entrega,descripcion) VALUES(?,?,?,?,?)';
    
    conexion.query(consulta,[nueva_tarea.titulo,nueva_tarea.estado,nueva_tarea.fecha_entrega,nueva_tarea.hora_entrega,nueva_tarea.descripcion],(err,rows,fields)=>{

        if(!err)
            res.send('Tarea creada!');
        else
            console.log(err);

    });
});

//Actualizar una tarea
app.put('/tareas/:id', (req,res) =>{

    const {titulo,estado,fecha_entrega,hora_entrega,descripcion} = req.body;
    const  { id } =  req.params;

    var consulta = 'UPDATE tarea  SET titulo = ? ,estado = ? ,fecha_entrega = ?, hora_entrega = ?,descripcion = ? WHERE id=?';
    
    conexion.query(consulta,[titulo,estado,fecha_entrega,hora_entrega,descripcion,id],(err,rows,fields)=>{

        if(!err)
            res.send('Tarea actualizada!');
        else
            console.log(err);

    });

});

// Eliminar tarea
app.delete('/tareas/:id', (req,res) => {

    var consulta = 'DELETE  FROM tarea WHERE id=?';
    
    conexion.query(consulta,[req.params.id],(err,rows,fields)=>{

        if(!err)
            res.send('tarea eliminada!');
        else
            console.log(err);
    });

});

module.exports = app;

