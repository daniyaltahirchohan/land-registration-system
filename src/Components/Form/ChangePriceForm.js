import React,{useState} from 'react'
import { FormButton, FormConstiner, FormFieldLabel, FormInputField, FormTitle, MainForm } from './StyledForms'

export const ChangePriceForm = (props,{className}) => {

    const [NewPrice, setNewPrice] = useState(undefined)
    const [ID, setID] = useState(undefined)

    const onSubmitHandler = (e) => {

        e.preventDefault()
        setID(props.id)
        alert('getting the details of ' + NewPrice)
        props.passNewPrice(NewPrice)

        console.log(ID)


    }

    return (
        <FormConstiner className={className}>

            <FormTitle>Change Price</FormTitle>

            <MainForm onSubmit={onSubmitHandler}>

                <FormFieldLabel>New Price</FormFieldLabel>

                <FormInputField 
                type='int'
                required
                value={NewPrice}
                onChange={(e) => setNewPrice(e.target.value)}

                />

                <FormButton>Change Price</FormButton>

            </MainForm>

        </FormConstiner>
    )
}
