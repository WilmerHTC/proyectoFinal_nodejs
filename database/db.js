const mysql = require('mysql');

// Establecemos la conexión a la base de datos, guardando en una constante el metodo a utilizar.
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});


conexion.connect((error) => {
    if (error) {
        console.log('El error de la conexión es:'+ error);
        return
    } 
    console.log('¡**BASE DE DATOS: --> CONEXION EXITOSA**!');
});

module.exports = conexion;