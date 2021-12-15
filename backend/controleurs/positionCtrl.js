const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const {Position , Vehicule} = require('../models')

// get all data
router.get('/', (req, res)=>{
        //res.send('hello world')
        const positions = Position.findAll({
            include: [
                {
                    model : Vehicule,
                }
            ]
        }).then((positions)=>{
            return res.status(200).json({positions})
        })
        
})

// getting one
router.get('/:id', (req, res)=>{
    res.send(req.params.id)
})

// creating one
router.post('/', (req, res)=>{
    console.log("post position")
    longitude = 5670
    latitude = 13441
    idVehicule = 3

    // Enregistrement d'un nouveau vehicule dans la base de donnée
    Position.create({
        longitude: longitude,
        latitude: latitude,
        idVehicule: idVehicule
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