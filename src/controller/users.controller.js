const { pool } = require('../../conexion');

const getUsers = async(req, res) => {
    const response = await pool.query('select * from tblusers');
    res.status(200).json(response.rows);
}

const getUserById = async(req, res) => {
    //res.send('User ID  ' + req.params.idUser);
    const id = req.params.id;
    const response = await pool.query("select * from tblusers where id = $1", [id]);
    res.json(response.rows);
}

const createUser = async(req, res) => {
    //req.body regresa la estructura json que recibe
    const { name, lastname, birdate, password, email, idtype_id } = req.body;

    const response = await pool.query('insert into tblusers (name, lastname, birdate, password, email, idtype_id) values ($1, $2, $3, $4, $5, $6)', [name, lastname, birdate, password, email, idtype_id]);
    console.log(response);
    res.json({
        message: 'Insert Succesfully',
        body: {
            "status": "true",
        }
    });
}

const updateUser = async(req, res) => {
    const id = req.params.id;
    const { name, lastname, birdate, password, email, idtype_id } = req.body;
    const response = await pool.query('update tblusers set  name = $1, lastname = $2, birdate = $3, password = $4, email = $5, idtype_id = $6 where id = $7', [name, lastname, birdate, password, email, idtype_id, id]);
    console.log(response);
    res.json(`User ${id} updated succesfuly`);
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    const response = pool.query("delete from tblusers where id = $1", [id]);
    console.log(response);
    res.json(`User ${id} deleted succesfuly`); //se usan otras tildes que permiten concatenar
}
module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}