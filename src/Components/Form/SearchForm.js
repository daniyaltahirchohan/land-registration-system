import React,{useState} from 'react'
import { FormButton, FormConstiner, FormFieldLabel, FormInputField, FormTitle, MainForm } from './StyledForms'

const SearchForm = (props,{className}) => {

    const [Data, setData] = useState('')

    const onSubmitHandler = (e) => {

        e.preventDefault()
        alert('getting the details of ' + Data)
        props.passData(Data)


    }

    return (
        <FormConstiner className={className}>

            <FormTitle>{props.title}</FormTitle>

            <MainForm onSubmit={onSubmitHandler}>

                <FormFieldLabel>{props.label}</FormFieldLabel>

                <FormInputField 
                type='text'
                required
                value={Data}
                onChange={(e) => setData(e.target.value)}

                />

                <FormButton>Search</FormButton>

            </MainForm>

        </FormConstiner>
    )
}

export default SearchForm
