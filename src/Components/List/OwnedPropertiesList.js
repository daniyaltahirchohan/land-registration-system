import React,{useState,useEffect} from 'react'
import { getUserProperties } from '../../Blockchain/BlockchainFunctions'
import PropertyDetails from '../DetailsBoxes/PropertyDetails'


const OwnedPropertiesList = (props) => {
   
    const [ID, setID] = useState(undefined)
    const [Owner, setOwner] = useState(undefined)
    const [Price, setPrice] = useState(undefined)
    const [District, setDistrict] = useState(undefined)
    const [Latitude, setLatitude] = useState(undefined)
    const [Longitude, setLongitude] = useState(undefined)
    const [Verified, setVerified] = useState(undefined)

    
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

    fetchProperitiesById(props.getBlockchainData('contract'),props.getBlockchainData('account'),props.getBlockchainData('totalAssets'),PropertyHandler)

    

    //const fetchProperityDetails = allProperties.map((data) => <PropertyDetails id={data} getBlockchainData={props.getBlockchainData}/>) 
    
    
    

    

    
        
    
    
    return (
      
        <div>
            {/*allProperties.length === props.getBlockchainData('totalAssets') ? (
                <div>...loading</div>
            ):(
                
                //fetchProperityDetails
                <div>hi</div>
                
            )*/}


            hi
           
        </div>
           
    )
}


const fetchProperitiesById = (contract,account,count) => {

    let properties = []

    
    
        console.log('enter loop')
        properties[0] = getUserProperties(contract,account,1)
        console.log('continuing in loop')
        //console.log('properity array',properties[i])
        

    

    return(properties)

}

export default OwnedPropertiesList
