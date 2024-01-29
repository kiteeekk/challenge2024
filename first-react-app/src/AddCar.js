import styled from "styled-components"
import { useState } from 'react'

const AddCarElement = styled.div``
const InputWrapper = styled.div`
    margin-bottom: 1em;
`
const AddCarButton = styled.button``

export function AddCar() {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState()

    const createNewCar = () => {
        const newCar = {
            make: manufacturer,
            model: model,
            year: year
        }
        fetch("/cars/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar),
        }).then(() => alert("New car added !!!!"))
    }

    console.log({ manufacturer, model, year, image })

    return <AddCarElement>
        <InputWrapper>
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input id="manufacturer" type={"text"} onChange={event => {
                setManufacturer(event.target.value)
            }} />
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="model">Model:</label>
            <input id="model" type={"text"} onChange={event => {
                setModel(event.target.value)
            }} />
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="year">Year:</label>
            <input id="year" type={"number"} onChange={event => {
                setYear(event.target.value)
            }} />
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="image">Image:</label>
            <input id="image" type={"file"} onChange={event => {
                setImage(event.target.value)
            }} />
        </InputWrapper>
        <AddCarButton onClick={() => { createNewCar() }}>
            Add new car
        </AddCarButton>
    </AddCarElement>
}