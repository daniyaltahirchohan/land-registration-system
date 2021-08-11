import styled from 'styled-components'


export const DetailsContains = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 5%;
    width: 90%;
    background-color: #cacaca;
    border-bottom: #000 2px solid;

`
export const DetailsFieldTitle = styled.h3`

    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #000;
    font-size: 1em;
    font-weight: bold;

`
export const DetailsFieldDetail = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #000;
    font-size: 1em;

`

export const ApproveBTN = styled.button`

    background-color: #00FF00;
    color: #000;

`

export const RejectBTN = styled.button`

    background-color: #ff2d00;
    color: #ffffff;

`