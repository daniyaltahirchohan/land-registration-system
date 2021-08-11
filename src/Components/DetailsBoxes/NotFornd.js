import React from 'react'
import styled from 'styled-components'

const NotFornd = ({className}) => {
    return (
        <NotFoundContainer className={className}>
            <NotForndDetail>
                Result not found may be user not exist or user is alresdy approved
            </NotForndDetail>
        </NotFoundContainer>
    )
}


const NotFoundContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    grid-template-rows: repeat(1,auto);
    width: 90%;
    padding: 5%;

`

const NotForndDetail = styled.h3`

    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    font-size: 1em;
    font-weight: bold;

`

export default NotFornd
