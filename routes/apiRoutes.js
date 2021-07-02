const router = require('express').Router();
const path = require('path');
const store = require('../db/store.js');

router.get('/notes', (req, res) => {
        store.getNotes()
        .then((notes) => {return res.json(notes)})
        .catch(error) 
});