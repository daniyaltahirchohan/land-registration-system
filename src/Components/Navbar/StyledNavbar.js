import styled from 'styled-components'

export const StyledNav = styled.nav`

    height: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #01411c;

    @media screen and (max-width: 768px){

        grid-template-columns: repeat(1,auto);
        grid-template-rows: repeat(2,auto);
        padding: 10px;

    }

`

export const StyledNavTitle = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    padding: 10px;

    @media screen and (max-width: 768px){

        align-self: center;
        justify-self: center;

        @media screen and (max-width: 421px){
            font-size: 0.8em
        }

    }

`

export const StyledNavUserID = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    align-self: center;
    justify-self: center;
    color: #fff;

    @media screen and (max-width: 421px){
            font-size: 0.5em
    }

`

