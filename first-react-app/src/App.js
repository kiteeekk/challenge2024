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
  const [inputText, setInputText] = useState('')
  console.log({ inputText })
  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(inputText.toLowerCase()) || // &&
    car.model.toLowerCase().includes(inputText.toLowerCase())
  )
  return (
    <div>
      <input
        type={"text"}
        onChange={event => {
          setInputText(event.target.value)
        }}
      />
      <ol>
        {filteredCars.map(car =>
          <li style={{ color: selectColor(car) }}>{car.make} - {car.model} ({car.year})</li>
        )}
      </ol>
    </div>
  );
}
