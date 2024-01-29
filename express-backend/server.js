const express = require('express')
const bodyParser = require('body-parser');
const { getAllCars, getCarById, addCar, deleteById } = require('./db');

const app = express()
app.use(bodyParser.json())

// DO NOT TRY THIS AT HOME
//app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//    next();
//});

app.get('/cars', async function (req, res) {
    const cars = await getAllCars()
    res.send(cars)
})

app.get('/cars/:id', async function (req, res) {
    const foundCar = await getCarById(req.params.id)
    res.send(foundCar)
})

app.post('/cars', async function (req, res) {
    const newCar = await addCar(req.body);
    res.send(newCar)
})

app.delete('/cars/:id', async function (req, res) {
    await deleteById(req.params.id)
    res.send()
})

app.listen(8000)