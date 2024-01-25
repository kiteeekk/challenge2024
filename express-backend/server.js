const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// DO NOT TRY THIS AT HOME
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

let nextCarIndex = 2;
const db = [
    {
        "id": "1",
        "make": "Volvo",
        "model": "V70",
        "year": 2012,
        "imgUrl": "https://picsum.photos/147/112"
    }
]

app.get('/cars', function (req, res) {
    res.send(db)
})

app.get('/cars/:id', function (req, res) {
    const foundCar = db.find(car => car.id === req.params.id)
    res.send(foundCar)
})

app.post('/cars', function (req, res) {
    const newCar = req.body;
    newCar.id = `${nextCarIndex++}`
    db.push(newCar)
    res.send(newCar)
})

app.delete('/cars/:id', function (req, res) {
    const index = db.findIndex(car => car.id === req.params.id);
    db.splice(index, 1)
    res.send()
})

app.listen(8000)