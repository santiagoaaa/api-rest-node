const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, deleteUser, updateUser } = require('../controller/users.controller');

const {
    getUserType,
    createUserType,
    getUserTypeById,
    deleteUserType,
    updateUserType
} = require('../controller/userType.controller');

const {
    getCourse,
    createCourse,
    getCourseById,
    deleteCourse,
    updateCourse
} = require('../controller/course.controller');

const {
    getActivitie,
    createActivitie,
    getActivitieById,
    deleteActivitie,
    updateActivitie
} = require('../controller/activitie.controller');

const {
    getCommentActivity,
    createCommentActivity,
    getCommentActivityById,
    deleteCommentActivity,
    updateCommentActivity
} = require('../controller/commentActivity.controller');

const { login, rutasProtegidas } = require('../controller/login.controller');


//Login
router.post('/login', login);

//Rutas usuario
router.get('/users', rutasProtegidas, getUsers);
router.get('/users/:id', rutasProtegidas, getUserById);
router.post('/users', rutasProtegidas, createUser);
router.delete('/users/:id', rutasProtegidas, deleteUser);
router.put('/users/:id', rutasProtegidas, updateUser);

//Rutas UserType
router.get('/userType', getUserType);
router.get('/userType/:id', getUserTypeById);
router.post('/userType', createUserType);
router.delete('/userType/:id', deleteUserType);
router.put('/userType/:id', updateUserType);

//Rutas course
router.get('/course', getCourse);
router.get('/course/:id', getCourseById);
router.post('/course', createCourse);
router.delete('/course/:id', deleteCourse);
router.put('/course/:id', updateCourse);

//Rutas activites
router.get('/activitie', getActivitie);
router.get('/activitie/:id', getActivitieById);
router.post('/activitie', createActivitie);
router.delete('/activitie/:id', deleteActivitie);
router.put('/activitie/:id', updateActivitie);

//Rutas commentActivity
router.get('/commentActivity', getCommentActivity);
router.get('/commentActivity/:id', getCommentActivityById);
router.post('/commentActivity', createCommentActivity);
router.delete('/commentActivity/:id', deleteCommentActivity);
router.put('/commentActivity/:id', updateCommentActivity);

module.exports = router;