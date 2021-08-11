import React,{useState,useEffect} from 'react'
import { ApproveNewUser, getUserOuterDetails, RejectNewUser } from '../../Blockchain/BlockchainFunctions'
import UserApprovelDetailsBox from '../DetailsBoxes/UserApprovelDetailsBox'
import SearchForm from '../Form/SearchForm'

const ApproveUser = (props) => {

    const [UserAddress, setUserAddress] = useState(undefined)
    const [CNIC, setCNIC] = useState(undefined)
    const [Name, setName] = useState(undefined)
    const [District, setDistrict] = useState(undefined)
    const [UserType, setUserType] = useState(undefined)
    const [Verfication, setVerfication] = useState(undefined)
    const [Assets, setAssets] = useState(undefined)

    const approveUser = () => {

        ApproveNewUser(props.getBlockchainData('contract'),UserAddress,props.getBlockchainData('account'))

    }

    const regectUser = () => {

        RejectNewUser(props.getBlockchainData('contract'),UserAddress,props.getBlockchainData('account'))
        
    }
    
    const userDetails = {

        address: UserAddress,
        cnic: CNIC,
        name: Name,
        district: District
        
    }

    const userHandler = (_cnic,_name,_district,_userType,_userVerfication,_assets) => {

        setCNIC(_cnic)
        setName(_name)
        setDistrict(_district)
        setUserType(_userType)
        setVerfication(_userVerfication)
        setAssets(_assets)
    
    }

    useEffect(() => {

        console.log('CNIC:',CNIC)
        console.log('Name',Name)
        console.log('District',District)
        console.log('UserType',UserType)
        console.log('Verfication',Verfication)
        console.log('Assets',Assets)
        
    }, [CNIC,Name,District,UserType,Verfication,Assets])

    useEffect(() => {
        
        if(UserAddress !== undefined){
            getUserOuterDetails(props.getBlockchainData('contract'),UserAddress,userHandler,props.getBlockchainData('account'))
        }

    }, [UserAddress])

    const fetchUserAddress = (placeAddress) => {

        setUserAddress(placeAddress)
        alert('got user address user address: ' + placeAddress)

    }

    return (
        <div>

           {UserAddress === undefined ?(
                <SearchForm title={'Approve User'} label={'User Address'} passData={fetchUserAddress} /> 
           ):(  
                <UserApprovelDetailsBox userDetailsHandler={userDetails} approveUser={approveUser} regectUser={regectUser}/> 
           )}

        </div>
    )
}

export default ApproveUser
