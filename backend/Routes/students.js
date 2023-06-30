const express = require("express");
const router = require('express').Router();
const {Student, findStudents} = require('../DB/Models/students');



router.get('/', async (req, res,next) => {
    try{
        //if find all is null, send 404
        
        const allStudents = await findStudents();
        
        allStudents ? res.status(200).json(allStudents) : res.status(404).send("No students found");
    } catch(error) {
        next(error);
    }

});


 

module.exports = router;