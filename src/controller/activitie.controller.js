const { pool } = require('../../conexion');

const getActivitie = async(req, res) => {
    const response = await pool.query('select * from tblactivities');
    res.status(200).json(response.rows);
}

const getActivitieById = async(req, res) => {
    //res.send('User ID  ' + req.params.idUser);
    const id = req.params.id;
    const response = await pool.query("select * from tblactivities where id = $1", [id]);
    res.json(response.rows);
}

const createActivitie = async(req, res) => {
    //req.body regresa la estructura json que recibe
    const { activity, description, datactivity, idcourse_id } = req.body;

    const response = await pool.query('insert into tblactivities (activity, description, datactivity, idcourse_id) values ($1,$2,$3,$4)', [activity, description, datactivity, idcourse_id]);
    console.log(response);
    res.json({
        message: 'Insert Succesfully',
        body: {
            "status": "true",
        }
    });
}

const updateActivitie = async(req, res) => {
    const id = req.params.id;
    const { activity, description, datactivity, idcourse_id } = req.body;
    const response = await pool.query('update tblactivities set activity=$1,  description = $2, datactivity=$3, idcourse_id=$4 where id = $5', [activity, description, datactivity, idcourse_id, id]);
    console.log(response);
    res.json(`Activitie ${id} updated succesfuly`);
}

const deleteActivitie = async(req, res) => {
    const id = req.params.id;
    const response = pool.query("delete from tblactivities where id = $1", [id]);
    console.log(response);
    res.json(`Activitie ${id} deleted succesfuly`); //se usan otras tildes que permiten concatenar
}
module.exports = {
    getActivitie,
    createActivitie,
    getActivitieById,
    deleteActivitie,
    updateActivitie
}