import React,{useState,useEffect} from 'react'
import { AppropveNewProperty, getPropertyDetails ,RejectNewProperty, } from '../../Blockchain/BlockchainFunctions'
import PropertyApprovelDetailsBox from '../DetailsBoxes/PropertyApprovelDetailsBox'
import SearchForm from '../Form/SearchForm'

const ApproveProperty = (props) => {
    
    const [ID, setID] = useState(undefined)
    const [Owner, setOwner] = useState(undefined)
    const [Price, setPrice] = useState(undefined)
    const [District, setDistrict] = useState(undefined)
    const [Latitude, setLatitude] = useState(undefined)
    const [Longitude, setLongitude] = useState(undefined)
    const [Verified, setVerified] = useState(undefined)

    const approveProperty = () => {

        AppropveNewProperty(props.getBlockchainData('contract'),ID,props.getBlockchainData('account'))

    }

    const regectProperty = () => {

        RejectNewProperty(props.getBlockchainData('contract'),ID,props.getBlockchainData('account'))
        
    }
    
    const propertyDetails = {

        id: ID,
        owner: Owner,
        price: Price,
        district: District,
        latitude: Latitude,
        longitude: Longitude,
        verified: Verified
        
    }

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

        console.log('ID',ID)
        console.log('Owner',Owner)
        console.log('Price',Price)
        console.log('District',District)
        console.log('Latitude',Latitude)
        console.log('Longitude',Longitude)
        console.log('Verified',Verified)
        
    }, [ID,Owner,Price,District,Latitude,Longitude,Verified])

    useEffect(() => {
        
        if(ID !== undefined){
            getPropertyDetails(props.getBlockchainData('contract'),PropertyHandler,ID,props.getBlockchainData('account'))
        }

    }, [ID])

    const fetchID = (placeID) => {

        setID(placeID)
        alert('got properity id: ' + placeID)

    }

    return (
        <div>

           {ID === undefined ?(
                <SearchForm title={'Approve Property'} label={'Property ID'} passData={fetchID} /> 
           ):(  
                <PropertyApprovelDetailsBox propertyDetailsHandler={propertyDetails} approveProperty={approveProperty} regectProperty={regectProperty}/> 
           )}

        </div>
    )
    
}

export default ApproveProperty
