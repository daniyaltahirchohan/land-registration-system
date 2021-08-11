import React from 'react'
import { ApproveBTN, DetailsContains, DetailsFieldDetail, DetailsFieldTitle, RejectBTN } from './StyledDetailsBoxes'

const PropertyApprovelDetailsBox = (props,{className}) => {
    return (
        <DetailsContains className={className}>

            <DetailsFieldTitle>id</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.id}</DetailsFieldDetail>

            <DetailsFieldTitle>owner</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.owner}</DetailsFieldDetail>

            <DetailsFieldTitle>price</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.price}</DetailsFieldDetail>

            <DetailsFieldTitle>District</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.district}</DetailsFieldDetail>

            <DetailsFieldTitle>Latitude</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.latitude}</DetailsFieldDetail>

            <DetailsFieldTitle>Longitude</DetailsFieldTitle>
            <DetailsFieldDetail>{props.propertyDetailsHandler.longitude}</DetailsFieldDetail>

            <ApproveBTN onClick={() => props.approveProperty()}>Approve</ApproveBTN>
            <RejectBTN onClick={() => props.regectProperty()}>Reject</RejectBTN>

        </DetailsContains>
    )
}

export default PropertyApprovelDetailsBox
