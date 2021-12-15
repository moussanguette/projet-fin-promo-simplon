const vehiculeApi = require('../controleurs/vehiculeCtrl')
const express = require('express')
const app = express()

// route vers vehiculeCtrl
app.use('/vehicule', vehiculeApi)
