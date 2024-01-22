
import { Car } from './Car'

export function CarList(props) {
    return <ol>
        {props.cars.map(car =>
            <Car
                key={car.id}
                car={car}
                onDelete={props.onDelete}
            />)}
    </ol>
}