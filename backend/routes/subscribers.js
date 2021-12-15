const express = require('express')
const router = express.Router()
const Subscriber = require('../models/positionVehicle')

// get all data
router.get('/', async (req, res)=>{
    res.send('hello world')
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
})

// getting one
router.get('/:id', (req, res)=>{
    res.send(req.params.id)
})

// creating one
router.post('/', (req, res)=>{

})

// updating one
router.patch('/:id', (req, res)=>{

})

// deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router