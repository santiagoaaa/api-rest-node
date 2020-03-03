const { pool } = require('../../conexion');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const config = {
    llave: "clavepoderosa1997*"
};
app.set('llave', config.llave);

const login = async(req, res) => {
    const { user, pass } = req.body;
    const response = await pool.query('select email from tblusers where email = $1 and password = $2 ', [user, pass]);
    console.log(response.rows);

    if (response.rows.length == 0) {
        console.log("Error - usuario no valido");
        res.json({ mensaje: "Failed" });
    } else {
        console.log("Todo correcto");
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1800
        });
        res.json({
            mensaje: 'Perfect!',
            token: token
        });
    }
}


const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
});
module.exports = { login, rutasProtegidas }