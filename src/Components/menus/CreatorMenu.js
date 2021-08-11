import React from 'react'
import { MenuContainer, MenuLink} from './StyledMenu'
import MenuBox from './MenuBox'
import AddManIcon from '../../Images/fi-xnsuxx-user-plus-solid.png'

const CreatorMenu = ({className}) => {
    return (
        <MenuContainer className={className}>

            <MenuLink to='/addadminform' >
                <MenuBox image={AddManIcon} title='Add Admin' />
            </MenuLink>

        </MenuContainer>
    )
}

export default CreatorMenu
