const { Client } = require('pg')
const client = new Client({
    host: process.env.POSTGRES_HOST ?? "localhost",
    port: 5432,
    user: 'postgres',
    password: 'salasana',
    database: 'challenge'
})
client.connect()

async function getAllCars() {
    const result = await client.query("SELECT * FROM cars")
    return result.rows
}

async function getCarById(id) {
    const result = await client.query("SELECT * FROM cars WHERE id = $1", [id])
    return result.rows[0]
}

async function addCar(car) {
    const result = await client.query(
        'INSERT INTO cars(make, model, "year") VALUES($1, $2, $3)',
        [car.make, car.model, car.year]
    )
    return result.rows
}

async function deleteById(id) {
    const result = await client.query("DELETE FROM cars WHERE id = $1", [id])
    return result.rows[0]
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    deleteById
}