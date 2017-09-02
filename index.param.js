'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/:parametro?', function(req, res) {

    var parametro = "SIN PARAMETRO"

    if(req.params.parametro) {
        parametro = req.params.parametro
    }

    res.status(200).send(
        {
            message: 'Esto es un ejemplo de respuesta con parámetro enviado: ' + parametro,
            array: [
                {
                    param1: 1,
                    param2: 2
                },
                {
                    param1: 3,
                    param2: 4
                },
                {
                    param1: 5,
                    param2: 6
                }
            ]
        }
    )
})


app.listen(port, function() {
    console.log('Your server is running in port: ' + port)
})