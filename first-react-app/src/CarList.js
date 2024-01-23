
import { Car } from './Car'
import styled from 'styled-components'

const List = styled.div`
    padding: 2em;
    background-color: #ededed;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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