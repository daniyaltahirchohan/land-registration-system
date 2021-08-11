import styled from 'styled-components'
import {Link} from 'react-router-dom'
import bannerImage from '../../Images/real-estate-banner.jpg'

//styled component from menu box start

export const MenuBoxContainer = styled.div`

    height: 250px;
    width: 150px;
    border: 1px rgba(44, 44, 44, 0.527) solid;
    padding: 2px;

`

export const MenuBoxImg = styled.img`

    height: 140px;
    width: 140px;
    margin: 5px 3%;

`

export const MenuBoxTitle = styled.h3`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font: #0000;
    text-align: center;

`

//styled component from menu box end

//styled component from menu start

export const MenuContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit,150px);
    grid-gap: 5px;
    padding: 5%;
    width: 90%;
    justify-content: center;

`


export const MenuLink = styled(Link)`
  
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #000;
    justify-self: center;

`

//interface banner styled component start

export const BannerContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(1,auto);
    grid-template-rows: repeat(1,auto);
    justify-content: center;
    align-content: center;
    background-image: url(${bannerImage});

`

export const BannerTitle = styled.h1`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    font-weight: bold;
    color: #000;
    justify-self: center;

`

//interface banner styled component start