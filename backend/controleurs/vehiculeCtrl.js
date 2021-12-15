const express = require('express')
const router = express.Router()
const {Position , Vehicule} = require('../models')

// get all data
router.get('/', async (req, res)=>{
    try{
        res.send('hello world')
        const vehicules = await Vehicule.findAll({

        })
        res.status(200).json({vehicules})
    }
    catch(error){
        res.status(500).send(error.message);
    }

})

// getting one
router.get('/:id', (req, res)=>{
    res.send(req.params.id)
})

// creating one
router.post('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    console.log("post vehicule")
    marque = "pegeo"
    model = "308"

    // Enregistrement d'un nouveau vehicule dans la base de donnée
    Vehicule.create({
        marque: marque,
        model: model
    }).then((resultat)=>{
        res.status(201).json({
            message : " enregistrement effectuer avec succes",
            status : res.statusCode
        })
    })
})

// updating one
router.patch('/:id', (req, res)=>{

})

// deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router