const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bodyParser = require('body-parser');

const app = express();

// Seteamos el MOTOR DE PLANTILLAS de plantillas con SET.
app.set('view engine', 'ejs');

// Seteamos la carpeta public para archivos estaticos.
app.use(express.static('public'));

// Configurar node procesar datos registro de datos y login enviados dese un form.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Codigo para guardar las sesiones
// app.use(session({
//     secret: 'secret',
//     resave: 'true',
//     saveUninitialized: true
// }));

// SETEAMOS LAS VARIABLES DE ENTORNO.
dotenv.config({ path: './env/.env' });

// SE CONFIGURA PARA PODER TRABAJAR CON LAS COOKIES.
// app.use(cookieParser());

// Aqui se llama al ROUTER... (Las rutas que se hatyan creado.)
app.use('/', require('./routes/router'));

// Codigo para elimiar cache de las sesiones...
app.use(function (req, res, next) {
    if (!req.correo)
        res.header('Cache-Control', 'private, no-cache, no store, must-revalidate');
    next();
})

// Servidor a ejecutar
app.listen(5000, () => {
    console.log('Runing on server http://localhost:5000');
});
