const express = require("express");
const router = require('express').Router();
const {Campuses} = require('../DB/Models/campuses');



router.get('/', async (req, res,next) => {
    try{
        const allCampuses = await Campuses.findAll();
        
        allCampuses ? res.status(200).json(allCampuses) : res.status(404).send("No campuses found");
    } catch(error) {
        next(error);
    }

});

module.exports = router;