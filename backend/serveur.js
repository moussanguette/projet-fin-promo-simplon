const express = require('express')
const app = express()
require('dotenv').config() //

app.use(express.json())

//authoriser les requettes venant du front
//app.use(cors())

const vehiculeApi = require('./controleurs/vehiculeCtrl')
const positionApi = require('./controleurs/positionCtrl')
// route vers vehiculeCtrl
app.use('/vehicule', vehiculeApi)
// route vers positionCtrl
app.use('/position', positionApi)

//


var SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline')

var arduinoCOMPort = "/dev/ttyACM0";


const parser = new Readline()
arduinoCOMPort.pipe(parser)

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
    baudRate: 9600
   });
   
   arduinoSerialPort.on('open',function() {
     console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
     
     /* parser.on('data', function(donneeArduino){
        //console.log(donneeArduino);
     }) */
   });
   


app.listen(8080, ()=> console.log("serveur started"))