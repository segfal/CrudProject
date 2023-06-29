const express = require("express");
const router = require('express').Router();
const {Students} = require('../DB/Models/students');



router.get('/', async (req, res,next) => {
    try{
        const allStudents = await Students.findAll();
        
        allStudents ? res.status(200).json(allStudents) : res.status(404).send("No students found");
    } catch(error) {
        next(error);
    }

});

module.exports = router;