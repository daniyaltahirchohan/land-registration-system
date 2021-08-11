import React from 'react'
import { SignUpFormOuter, SignUpPageContainer } from './StyledInterfaces'
import SignUpForm from '../Form/SignUpForm'

const SignUpPage = (props,{className}) => {
    return (
        <SignUpPageContainer className={className}>
            <SignUpFormOuter>
                <SignUpForm getBlockchainData={props.getBlockchainData}/>
            </SignUpFormOuter>
        </SignUpPageContainer>
    )
}

export default SignUpPage
