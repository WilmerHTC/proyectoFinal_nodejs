const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// ** RUTAS PARA LAS VISTAS*******
// Mi ruta para la plantilla de INDEX.EJS <--..
router.get('/', (req, res) => { //, authController.isAuthenticated
    res.render('index');
});

// Mi ruta para la plantilla de LOGIN.EJS <--..
router.get('/login', (req, res) => {
    res.render('login') //, {alert:false}
});

// Mi ruta para la plantilla de REGISTER.EJS <--..
router.get('/register2', (req, res) => {
    res.render('register2');
});

// RUTAS PARA LOS METODOS DEL CONTROLADOR
router.post('/register', authController.register);

// Ruta para el controlador de sesiones
router.post('/login', authController.login)

// Ruta para cerrar mi sesion...
// router.get('/logout', authController.logout)


// Exporto Mis metoso que utiliza la constante ***router__...
module.exports = router;