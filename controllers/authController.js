const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const conexion = require('../database/db.js');
const { promisify } = require('util');

// Codigo: controlador para el procedimiento de registrar usuarios..
exports.register = async (req, res) => {

    try {
        const nombres = req.body.nombres
        const apellidos = req.body.apellidos
        const numeroIdentificacion = req.body.numeroIdentificacion
        const telefono = req.body.telefono
        const correo = req.body.correo
        const password = req.body.password
        // Ecncriptar contraseña..
        let passHash = await bcrypt.hash(password, 8);
        const numeroFicha = req.body.numeroFicha
        console.log(passHash);

        // LLAMO A MI CONEXION CON BASE DE DATOS...
        conexion.query('INSERT INTO aprendiz SET ?', { nombres: nombres, apellidos: apellidos, numeroIdentificacion: numeroIdentificacion, telefono: telefono, correo: correo, password: passHash, numeroFicha: numeroFicha }, (error, results) => {
            // SI HAY UN ERROR AL REGIsTRAR DATOS ME MUESTRA EL ERROR
            if (error) { console.log(error) }
            // SI NO HAY ERRORES ME REDIRIGE A LA PAGINA DE LOGIN...
            res.redirect('/login')
            console.log('Sis e insertan datos')
        });
    } catch (error) {
        console.log(error);
    }
};

// Controlador para el inicio de sesion
exports.login = async (req, res) => {
    try {
        const correo = req.body.correo
        const password = req.body.password
        let passHash = await bcrypt.hash(password, 8);


        if (!correo || passHash.length == 0 && !passHash) {
            res.render('login')
            console.log('Error: Digite su correo y contraseña')
 
        } else {
            conexion.query('SELECT * aprendiz WHERE correo = ?', [correo], async (req, results) => {
                if (!passHash) {
                console.log('Error en contraseña')
            } else {
                res.redirect('/');
                console.log('Se ha iniciado la sesion');
            }

            });
        } 
        console.log(correo + "," + passHash)
    } catch (error) {
        console.log(error);
    }

};