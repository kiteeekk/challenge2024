import { useState } from 'react'

function selectColor(car) {
  switch (car.make) {
    case "Honda":
      return "silver"
    case "Ford":
      return "blue"
    case "Volkswagen":
      return "green"
    default:
      return "red"
  }
}

export function App() {
  const cars = [
    { make: "Volvo", model: "V70", year: 2012 },
    { make: "Honda", model: "Accord", year: 2000 },
    { make: "Ford", model: "Fiesta", year: 2020 },
    { make: "Volkswagen", model: "Golf", year: 2024 }
  ]
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
      .sort((car1, car2) => car1.make.localeCompare(car2.make))
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
        <option>Year</option>
      </select>
      <ol>
        {filteredCars.map(car =>
          <li style={{ color: selectColor(car) }}>{car.make} - {car.model} ({car.year})</li>
        )}
      </ol>
    </div>
  );
}
