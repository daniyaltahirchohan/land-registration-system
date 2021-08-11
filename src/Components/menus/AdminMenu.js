import React from 'react'
import { MenuContainer, MenuLink} from './StyledMenu'
import MenuBox from './MenuBox'
import AddManIcon from '../../Images/fi-xnsuxx-user-plus-solid.png'
import AddProperityIcon from '../../Images/649193_home_512x512.png'

const AdminMenu = ({className}) => {
    return (
        <MenuContainer className={className}>

            <MenuLink to='/addadminform' >
                <MenuBox image={AddManIcon} title='Add Admin' />
            </MenuLink>

            <MenuLink to='/addregistrarform' >
                <MenuBox image={AddManIcon} title='Add Registrar' />
            </MenuLink>

            <MenuLink to='/propertyapprovalslist' >
                <MenuBox image={AddProperityIcon} title='Property Approvals' />
            </MenuLink>

        </MenuContainer>
    )
}

export default AdminMenu
