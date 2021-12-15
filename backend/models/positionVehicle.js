const mongoose = require('mongoose')

const positionVehiculeSchema = new mongoose.Schema({
    longitude : {
        type : String,
        require : true
    },
    latitude : {
        type : String,
        require : true
    },
    positionDate :{
        type : String,
        require : true,
        default : Date.now
    }
})

module.exports = mongoose.model('Subscriber', positionVehiculeSchema)