import React from 'react'
import { CBTitle, ConnectBox, ConnectPageContainer, Web3ConnectBTN } from './ConnectStyledComponents'

const ConnectPage = (props,className) => {
    return (
        <ConnectPageContainer className={className}>

            <ConnectBox>
                <CBTitle>wellcome to land reagistration system</CBTitle>
                <Web3ConnectBTN onClick={props.onClick}>connect</Web3ConnectBTN>
            </ConnectBox>

        </ConnectPageContainer>
    )
}

export default ConnectPage
