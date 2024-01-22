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

export function Car(props) {
    const car = props.car;
    return <li key={car.id} style={{ color: selectColor(car) }}>
        <span>{car.make} - {car.model} ({car.year})</span>
        <button onClick={() =>
            ''//setCars(cars.filter(c => c.id !== car.id))
        }>X</button>
    </li>
}