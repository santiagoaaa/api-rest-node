const express = require('express');
const app = express();
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'));

//rutas
app.get('/', function(req, res) {
    res.send('Ruta raiz');
});
//Servidor
app.listen(3000, () => {
    console.log('Server on port 3000 ');
});