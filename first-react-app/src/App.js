import { useState, useEffect } from 'react'
import { CarList } from './CarList'

export function App() {
  const [cars, setCars] = useState([])
  const [inputText, setInputText] = useState("")
  const [inputYear, setInputYear] = useState("")
  const [inputSelect, setInputSelect] = useState("")
  const [error, setError] = useState()
  console.log({ inputText, inputYear, inputSelect })

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then(result => result.json())
      .then(data => setCars(data))
      .catch(error => setError(error.message))
  }, [])

  const filteredCars =
    cars
      .filter(car =>
        car.make.toLowerCase().includes(inputText.toLowerCase()) || // &&
        car.model.toLowerCase().includes(inputText.toLowerCase())
      )
      .filter(car => car.year >= inputYear)
      .sort((car1, car2) => {
        switch (inputSelect) {
          case "Year":
            return car1.year - car2.year;
          case "Model":
            return car1.model.localeCompare(car2.model)
          case "Make":
            return car1.make.localeCompare(car2.make)
          default:
            return car1.make.localeCompare(car2.make)
        }
      })
  return (
    <div>
      <input
        type={"text"} placeholder='Search' onChange={event => {
          setInputText(event.target.value)
        }}
      />
      <input type={"number"} placeholder='Year' onChange={event => {
        setInputYear(event.target.value)
      }} />
      <select onChange={event => setInputSelect(event.target.value)}>
        <option>Make</option>
        <option>Model</option>
        <option>Year</option>
      </select>
      {error && <div>{error}</div>}
      <CarList
        cars={filteredCars}
        onDelete={(id) => {
          fetch("http://localhost:8000/cars/" + id, {
            method: 'DELETE',
          }).then(() => {
            setCars(cars.filter(c => c.id !== id))
          })
        }}
      />
    </div>
  );
}