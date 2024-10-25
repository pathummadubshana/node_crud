const express = require('express');
const { getStudent, createStudents, updateStudent, deleteStudent } = require('../controller/studentControler');

const router = express.Router()

//get
router.get('/getall',getStudent);

//create
router.post('/create',createStudents);

//update
router.put('/update/:id',updateStudent);

//delete
router.delete('/delete/:id',deleteStudent);



module.exports = router

