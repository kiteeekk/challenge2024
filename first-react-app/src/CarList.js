
import { Car } from './Car'
import styled from 'styled-components'

const List = styled.ol`
    margin: 20px;
    border: 1px solid black;
    padding: 30px;
`

export function CarList(props) {
    return <List>
        {props.cars.map(car =>
            <Car
                key={car.id}
                car={car}
                onDelete={props.onDelete}
            />)}
    </List>
}