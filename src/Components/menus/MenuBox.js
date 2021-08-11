import React from 'react'
import { MenuBoxContainer, MenuBoxImg, MenuBoxTitle } from './StyledMenu'

const MenuBox = (props,className) => {
    return (
        <MenuBoxContainer className={className}>
            <MenuBoxImg src={props.image} alt={''} />
            <MenuBoxTitle>{props.title}</MenuBoxTitle>
        </MenuBoxContainer>
    )
}

export default MenuBox
