import { useState } from 'react'
import { Car } from './Car'


export function App() {
  const [cars, setCars] = useState([
    { id: 1, make: "Volvo", model: "V70", year: 2012 },
    { id: 2, make: "Honda", model: "Accord", year: 2000 },
    { id: 3, make: "Ford", model: "Fiesta", year: 2020 },
    { id: 4, make: "Volkswagen", model: "Golf", year: 2024 }
  ])
  const [inputText, setInputText] = useState("")
  const [inputYear, setInputYear] = useState("")
  const [inputSelect, setInputSelect] = useState("")
  console.log({ inputText, inputYear, inputSelect })

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
      <ol>
        {filteredCars.map(car => <Car car={car} />)}
      </ol>
    </div>
  );
}
