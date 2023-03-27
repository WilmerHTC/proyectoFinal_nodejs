const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
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
        // let passHash = await bcryptjs.hash(password, 8);
        const numeroFicha = req.body.numeroFicha
        // console.log(passHash);

        // console.log(req.body);
        // LLAMO A MI CONEXION CON BASE DE DATOS...
        conexion.query('INSERT INTO aprendiz SET ?', { nombres: nombres, apellidos: apellidos, numeroIdentificacion: numeroIdentificacion, telefono: telefono, correo: correo, password: password, numeroFicha: numeroFicha }, (error, results) => {
            // SI HAY UN ERROR AL REGIsTRAR DATOS ME MUESTRA EL ERROR
            if (error) { console.log(error) }
            // SI NO HAY ERRORES ME REDIRIGE A LA PAGINA DE LOGIN...
            res.redirect('/')
        });
        // console.log(req.body);
    } catch (error) {
        console.log(error);
    }
};

// Controlador para el inicio de sesion
exports.login = async (req, res) => {
    try {
        const correo = req.body.correo
        const password = req.body.password


        if ( !correo || password.length == 0 && !password) {
            console.log('Error: Digite su correo y contraseña')
 
        }

        conexion.query('SELECT * aprendiz WHERE  correo = ?', [correo], async (error, results) => {  
            
            if (password.length == 0 && !password) {
                console.log('Error en contraseña')
            } else {
                res.render('index')
                console.log('Se ha iniciado la sesion');
            }
        })


        // conexion.query('SELECT * aprendiz WHERE password = ?', [password], async (req, res) => {
        // });
        
        console.log(correo + "," + password)
    } catch (error) {
        console.log(error);
    }

};

// Controlador para verificar si esta autenticado...
// exports.isAuthenticated = async (req, res, next) => {
//     if (req.cookies.jwt) {
//         try {
//             const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
//             conexion.query('SELECT * FROM aprendiz WHERE id ?', [decodificada.id], (error, results) => {
//                 if (!results) { return next() }
//                 req.aprendiz = results
//                 return next();
//             });

//         } catch (error) {
//             console.log(error)
//         }
//     } else {
//         res.redirect('/login')
//     }
// }

// // Controlador para cerrar las sesiones de usuario
// exports.logout = async (req, res) => {
//     res.clearCookie('jwt')
//     return res.redirect('/')
// }