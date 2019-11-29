const express = require('express');
const router=express.Router();
const Note=require('../models/notemodel');


router.route('/:cc').get( function(req, res) {
    Note.find({'cc':req.params.cc},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
router.post('/', async (req,res) => { 
    
    let nt = new Note(req.body);
    nt.save()
        .then(Note => {
            res.status(200).json({'Note': 'Note added successfully'});
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports=router;