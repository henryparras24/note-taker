 const router = require('express').Router();
 const fs = require('fs');
 const path = require('path');
 const uniqid = require('uniqid');
// const store = require('../db/store.js');
 
let { notes } = require('../db/db.json');

router.get('/notes', (req, res) => {
    
    res.json(notes);
         
 });





module.exports = router