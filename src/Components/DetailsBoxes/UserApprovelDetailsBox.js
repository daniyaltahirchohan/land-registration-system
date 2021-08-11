import React from 'react'
import { ApproveBTN, DetailsContains, DetailsFieldDetail, DetailsFieldTitle, RejectBTN } from './StyledDetailsBoxes'


const UserApprovelDetailsBox = (props,{className}) => {
    return (
        <DetailsContains className={className}>

            <DetailsFieldTitle>CNIC</DetailsFieldTitle>
            <DetailsFieldDetail>{props.userDetailsHandler.cnic}</DetailsFieldDetail>

            <DetailsFieldTitle>Name</DetailsFieldTitle>
            <DetailsFieldDetail>{props.userDetailsHandler.name}</DetailsFieldDetail>

            <DetailsFieldTitle>District</DetailsFieldTitle>
            <DetailsFieldDetail>{props.userDetailsHandler.district}</DetailsFieldDetail>

            <ApproveBTN onClick={() => props.approveUser()}>Approve</ApproveBTN>
            <RejectBTN onClick={() => props.regectUser()}>Reject</RejectBTN>

        </DetailsContains>
    )
}

export default UserApprovelDetailsBox
