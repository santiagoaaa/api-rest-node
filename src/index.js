const express = require('express');
const app = express();
const morgan = require('morgan');

//middlewares -> funciones que se ejecutan antes de llegar a las rutas
app.use(morgan('dev'));
app.use(express.json()); //
app.use(express.urlencoded({ extended: true })); //con extended false no permito recibir imagenes

//rutas
app.use(require('./routes/index'));

//Servidor
app.listen(3000, () => {
    console.log('Server on port 3000 ');
});