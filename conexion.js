const { Pool } = require('pg'); //pool es un conjunto de conexiones
const pool = new Pool({
    host: '192.168.1.72',
    user: 'postgres',
    password: 'admin',
    database: 'classroom_moviles',
    port: '5432'
});

module.exports = {
    pool
}