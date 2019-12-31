const express = require('express');
const router=express.Router();
const Groupe = require('../models/groupemodel');



router.get ('/', (req,res)=>{
    res.send ('we are on groupeeee');
});

router.post('/', async (req,res) => { 
    
    let grp = new Groupe(req.body);
    grp.save()
        .then(Groupe => {
            res.status(200).json({'Groupe': 'Groupe added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Groupe failed');
        });
});

module.exports=router;