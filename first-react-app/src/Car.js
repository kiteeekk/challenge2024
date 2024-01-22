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
    const { car } = props;

    return <li style={{ color: selectColor(car) }}>
        <span>{car.make} - {car.model} ({car.year})</span>
        <button onClick={() => props.onDelete(car.id)
        }>X</button>
        { }
    </li >
}