 const router = require('express').Router();
 const fs = require('fs');
 const path = require('path');
 const uniqid = require('uniqid');
// const store = require('../db/store.js');
 let {notes} = require('../db/db.json');

router.get('/notes', (req, res) => {
    
    res.json(notes);
         
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const note = newNote(req.body , notes);
    res.json(note)
});

function newNote(body, arrayNotes) {
    const note = body;
    arrayNotes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes: arrayNotes }, null, 2)
    );
    return note;
}



module.exports = router