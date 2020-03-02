const { pool } = require('../../conexion');

const getCourse = async(req, res) => {
    const response = await pool.query('select * from tblcourse');
    res.status(200).json(response.rows);
}

const getCourseById = async(req, res) => {
    //res.send('User ID  ' + req.params.idUser);
    const id = req.params.id;
    const response = await pool.query("select * from tblcourse where id = $1", [id]);
    res.json(response.rows);
}

const createCourse = async(req, res) => {
    //req.body regresa la estructura json que recibe
    const { name, description, idteacher_id } = req.body;

    const response = await pool.query('insert into tblcourse (name, description, idteacher_id) values ($1,$2,$3)', [name, description, idteacher_id]);
    console.log(response);
    res.json({
        message: 'Insert Succesfully',
        body: {
            "status": "true",
        }
    });
}

const updateCourse = async(req, res) => {
    const id = req.params.id;
    const { name, description, idteacher_id } = req.body;
    const response = await pool.query('update tblcourse set name=$1,  description = $2, idteacher_id=$3 where id = $4', [name, description, idteacher_id, id]);
    console.log(response);
    res.json(`Course ${id} updated succesfuly`);
}

const deleteCourse = async(req, res) => {
    const id = req.params.id;
    const response = pool.query("delete from tblcourse where id = $1", [id]);
    console.log(response);
    res.json(`Course ${id} deleted succesfuly`); //se usan otras tildes que permiten concatenar
}
module.exports = {
    getCourse,
    createCourse,
    getCourseById,
    deleteCourse,
    updateCourse
}