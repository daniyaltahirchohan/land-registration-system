import React from 'react'
import { BannerContainer, BannerTitle } from './StyledMenu'

const MenuBanner = (props,className) => {
    return (
        <BannerContainer className={className}>
            <BannerTitle>{props.title}</BannerTitle>
        </BannerContainer>
    )
}

export default MenuBanner
