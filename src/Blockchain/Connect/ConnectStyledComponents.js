import styled from 'styled-components'
import connectionPGIMGBanner from '../../Images/D1ophyPX0AIslZE.jpg'

export const ConnectPageContainer = styled.div`

    width: 100%;
    height: 100vh;
    background-image: url(${connectionPGIMGBanner});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: fixed;

`

export const ConnectBox = styled.div`

    position: absolute;
    height: 250px;
    width: 150px;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: 3fr 1fr;
    background-color: rgba( 1, 65, 28, 0.9);
    align-self: center;
    justify-self: center;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;

`

export const CBTitle = styled.h2`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    align-self: center;
    justify-self: center;
    text-transform: uppercase;
    text-align: center;

`

export const Web3ConnectBTN = styled.button`

    font-size: 0.8em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #01411c;
    align-self: center;
    justify-self: center;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 5px;
`