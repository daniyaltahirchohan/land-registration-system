import React from 'react'
import { MenuContainer, MenuLink} from './StyledMenu'
import MenuBox from './MenuBox'
import AddManIcon from '../../Images/fi-xnsuxx-user-plus-solid.png'
import AddProperityIcon from '../../Images/649193_home_512x512.png'
import DealIcon from '../../Images/contract-law-1-956900.webp'


const RegistrarMenu = ({className}) => {
    return (
        <MenuContainer className={className}>

            <MenuLink to='/approveuserlist' >
                <MenuBox image={AddManIcon} title='Approve User' />
            </MenuLink>

            <MenuLink to='/approvepurchaseslist' >
                <MenuBox image={DealIcon} title='Approve Perchases' />
            </MenuLink>

            <MenuLink to='/addnewproperityform' >
                <MenuBox image={AddProperityIcon} title='Add New Property' />
            </MenuLink>

        </MenuContainer>
    )
}

export default RegistrarMenu
