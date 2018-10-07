const express = require('express');
const router = express.Router();
const mysql = require('./conexion');

router.get("/", (req,res) => {
    mysql.query('select * from Clientes',(err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        res.json(rows);
    })
})

router.get("/:id", (req,res) => {
    const {id} = req.params;
    mysql.query('select * from Clientes where id=?',[id],(err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        res.json(rows);
    })
})

router.post("/", (req,res) => {
    const {cedula,nombres,apellidos,celular,email} = req.body;
    console.log(cedula);
    mysql.query('insert into Clientes (Cedula,Nombres,Apellidos,Celular,Email) values (?,?,?,?,?)',[cedula,nombres,apellidos,celular,email],(err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        res.json({Status : 'Guardado exitosamente'});
    })
})

router.put("/:id", (req,res) => {
    const {id} = req.params;
    const {cedula,nombres,apellidos,celular,email} = req.body;
    mysql.query('update Clientes set Cedula=?,Nombres=?,Apellidos=?,Celular=?,Email=? where Id=?',[cedula,nombres,apellidos,celular,email,id],(err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        res.json({Status : 'Actualizado exitosamente'});
    })
})

router.delete("/:id", (req,res) => {
    const {id} = req.params;
    mysql.query('delete from Clientes where Id=?',[id],(err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        res.json({Status : 'Eliminado exitosamente'});
    })
})

module.exports = router;