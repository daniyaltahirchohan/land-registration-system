import styled from 'styled-components'

export const FormConstiner = styled.div`

    border: 1px solid #0000;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
    justify-items: center;

`

export const FormTitle = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #cacaca;
    font-weight: bold;
    font-size: 1em;
    color: #000;

`

export const MainForm = styled.form`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;

`

export const FormFieldLabel = styled.label`

    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #cacaca;
    font-size: 0.6em;
    color: #000;

`

export const FormInputField = styled.input`

    margin: 0 8px 0 0;

`

export const FormButton = styled.button`

    background-color: #cacaca;
    border-radius: 20px;
    margin: 10px;
    padding: 8px;

`