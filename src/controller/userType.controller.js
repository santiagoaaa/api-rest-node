const { pool } = require('../../conexion');

const getUserType = async(req, res) => {
    const response = await pool.query('select * from tblusertype');
    res.status(200).json(response.rows);
}

const getUserTypeById = async(req, res) => {
    //res.send('User ID  ' + req.params.idUser);
    const id = req.params.id;
    const response = await pool.query("select * from tblusertype where id = $1", [id]);
    res.json(response.rows);
}

const createUserType = async(req, res) => {
    //req.body regresa la estructura json que recibe
    const { description } = req.body;

    const response = await pool.query('insert into tblusertype (description) values ($1)', [description]);
    console.log(response);
    res.json({
        message: 'Insert Succesfully',
        body: {
            "status": "true",
        }
    });
}

const updateUserType = async(req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    const response = await pool.query('update tblusertype set  description = $1 where id = $2', [description, id]);
    console.log(response);
    res.json(`UserType ${id} updated succesfuly`);
}

const deleteUserType = async(req, res) => {
    const id = req.params.id;
    const response = pool.query("delete from tblusertype where id = $1", [id]);
    console.log(response);
    res.json(`UserType ${id} deleted succesfuly`); //se usan otras tildes que permiten concatenar
}
module.exports = {
    getUserType,
    createUserType,
    getUserTypeById,
    deleteUserType,
    updateUserType
}