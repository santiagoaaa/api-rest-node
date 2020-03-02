const { pool } = require('../../conexion');

const getCommentActivity = async(req, res) => {
    const response = await pool.query('select * from tblcommentactivity');
    res.status(200).json(response.rows);
}

const getCommentActivityById = async(req, res) => {
    //res.send('User ID  ' + req.params.idUser);
    const id = req.params.id;
    const response = await pool.query("select * from tblcommentactivity where id = $1", [id]);
    res.json(response.rows);
}

const createCommentActivity = async(req, res) => {
    //req.body regresa la estructura json que recibe
    const { comment, datcomactivity, idactiviti_id, idstudent_id } = req.body;

    const response = await pool.query('insert into tblcommentactivity (comment, datcomactivity, idactiviti_id, idstudent_id) values ($1,$2,$3,$4)', [comment, datcomactivity, idactiviti_id, idstudent_id]);
    console.log(response);
    res.json({
        message: 'Insert Succesfully',
        body: {
            "status": "true",
        }
    });
}

const updateCommentActivity = async(req, res) => {
    const id = req.params.id;
    const { comment, datcomactivity, idactiviti_id, idstudent_id } = req.body;
    const response = await pool.query('update tblcommentactivity set comment=$1,  datcomactivity = $2, idactiviti_id=$3, idstudent_id=$4 where id = $5', [comment, datcomactivity, idactiviti_id, idstudent_id, id]);
    console.log(response);
    res.json(`CommentActivity ${id} updated succesfuly`);
}

const deleteCommentActivity = async(req, res) => {
    const id = req.params.id;
    const response = pool.query("delete from tblcommentactivity where id = $1", [id]);
    console.log(response);
    res.json(`CommentActivity ${id} deleted succesfuly`); //se usan otras tildes que permiten concatenar
}
module.exports = {
    getCommentActivity,
    createCommentActivity,
    getCommentActivityById,
    deleteCommentActivity,
    updateCommentActivity
}