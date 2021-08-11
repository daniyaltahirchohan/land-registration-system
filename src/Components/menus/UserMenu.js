import React from 'react'
import { MenuContainer, MenuLink} from './StyledMenu'
import MenuBox from './MenuBox' 
import HouseIcon from '../../Images/69524.png'
import BidIcon from '../../Images/3194299-200.png'
import BidsIcon from '../../Images/2370784-2000.png'

const UserMenu = ({className}) => {
    return (
        <MenuContainer className={className}>

        <MenuLink to='/OwnedProperties' >
            <MenuBox image={HouseIcon} title='Property Owned' />
        </MenuLink>

        <MenuLink to='/addregistrarform' >
            <MenuBox image={BidIcon} title='Request Purchase' />
        </MenuLink>

        <MenuLink to='/propertyapprovalslist' >
            <MenuBox image={BidsIcon} title='Purchase Request' />
        </MenuLink>

    </MenuContainer>
    )
}

export default UserMenu
