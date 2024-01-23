import styled from 'styled-components'

const CarElement = styled.div`
    background-color: white;
    width: 10em;
    height: 13em;
    position: relative;
    margin: 1.5em;
    padding: 0.5em;
`
const Image = styled.img`
    width: 100%;
    height: 7em;
    background: gray;
`
const Title = styled.div`
    font-weight: 700;
    font-size: 1.2em;
    margin-bottom: 0.2em;
`
const Description = styled.div`
`
const Bait = styled.div`
    background-color: gold;
    color: white;
    border-radius: 50%;
    height: 2.5em;
    width: 2.5em;
    text-align: center;
    line-height: 2.5em;
    position: absolute;
    right: -0.6em;
    bottom: -0.6em;
    z-index: 1;
`
const RemoveButton = styled.button`
    position: absolute;
    right: -0.4em;
    top: -0.4em;
    z-index: 1;
    border: 1px red solid;
    background-color: white;
    color: red;
    &:hover {
        background: red;
        color: white;
        cursor: pointer;
    }
`

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

    return (
        <CarElement style={{ color: selectColor(car) }}>
            <Image src={car.imgUrl} />
            <Title>{car.make}</Title>
            <Description>{car.model}</Description>
            <Bait>{car.year}</Bait>
            <RemoveButton
                onClick={() => props.onDelete(car.id)}>
                X
            </RemoveButton>
        </CarElement >
    )
}