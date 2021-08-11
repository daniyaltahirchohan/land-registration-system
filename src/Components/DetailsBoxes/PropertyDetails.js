import React,{useState,useEffect} from 'react'
import { getPropertyDetails } from '../../Blockchain/BlockchainFunctions'
import { ChangePriceForm } from '../Form/ChangePriceForm'
import { ApproveBTN, DetailsContains, DetailsFieldDetail, DetailsFieldTitle, RejectBTN } from './StyledDetailsBoxes'

const PropertyDetails = (props,{className}) => {
    
    const [ID, setID] = useState(undefined)
    const [Owner, setOwner] = useState(undefined)
    const [Price, setPrice] = useState(undefined)
    const [District, setDistrict] = useState(undefined)
    const [Latitude, setLatitude] = useState(undefined)
    const [Longitude, setLongitude] = useState(undefined)
    const [Verified, setVerified] = useState(undefined)
    const [run, setrun] = useState(true)

    const PropertyHandler = (_id,_owner,_price,_district,_latitude,_longitude,_verified) => {

        setID(_id)
        setOwner(_owner)
        setPrice(_price)
        setDistrict(_district)
        setLatitude(_latitude)
        setLongitude(_longitude)
        setVerified(_verified)
    
    }


    useEffect(() => {

        console.log(ID)
        console.log(Owner)
        console.log(Price)
        console.log(District)
        console.log(Latitude)
        console.log(Longitude)
        console.log(Verified)
        
    }, [ID,Owner,Price,District,Latitude,Longitude,Verified])
        
    
    const fireFunction = () => {

        getPropertyDetails(
            props.getBlockchainData('contract'),
            PropertyHandler,
            props.id,
            props.getBlockchainData('account')
        )

        setrun(false)

    }

    

    if(run === true){
        fireFunction()
    }

        
        
        

        
    
     


    return (
        <DetailsContains className={className}>

            <DetailsFieldTitle>ID:</DetailsFieldTitle>
            <DetailsFieldDetail>{ID}</DetailsFieldDetail>

            <DetailsFieldTitle>Owner:</DetailsFieldTitle>
            <DetailsFieldDetail>{Owner}</DetailsFieldDetail>

            <DetailsFieldTitle>Price:</DetailsFieldTitle>
            <DetailsFieldDetail>{Price}</DetailsFieldDetail>

            <DetailsFieldTitle>District:</DetailsFieldTitle>
            <DetailsFieldDetail>{District}</DetailsFieldDetail>

            <DetailsFieldTitle>Latitude:</DetailsFieldTitle>
            <DetailsFieldDetail>{Latitude}</DetailsFieldDetail>

            <DetailsFieldTitle>Longitude:</DetailsFieldTitle>
            <DetailsFieldDetail>{Longitude}</DetailsFieldDetail>

            <DetailsFieldTitle>Verified:</DetailsFieldTitle>
            <DetailsFieldDetail>{Verified}</DetailsFieldDetail>

            <ApproveBTN onClick={() => console.log('placed for sale')}>Place For Sale</ApproveBTN>
            <RejectBTN onClick={() => console.log('removed from sale')}>Remove From Sale</RejectBTN>

            <ChangePriceForm id={ID}/>

        </DetailsContains>
    )
}

export default PropertyDetails
