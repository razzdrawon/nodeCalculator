'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/:operando1/:operador/:operando2', function(req, res) {

    var resultado = ""
    if(req.params.operando1 && req.params.operando2 && req.params.operador) {
        switch (req.params.operador){
            case "+":
                resultado += parseFloat(parseFloat(req.params.operando1) + parseFloat(req.params.operando2))
                break
            case "-":
                resultado += parseFloat(req.params.operando1 - req.params.operando2)
                break
            case "x":
                resultado += parseFloat(req.params.operando1 * req.params.operando2)
                break
            case "/":
                resultado += parseFloat(req.params.operando1 / req.params.operando2)
                break
        }
    }

    res.status(200).send(
        {
            resultado: resultado,
        }
    )
})


app.listen(port, function() {
    console.log('Your server is running in port: ' + port)
})