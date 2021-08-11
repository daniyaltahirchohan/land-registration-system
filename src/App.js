import { useEffect, useState } from 'react';
import './App.css';
import { getUserDetails } from './Blockchain/BlockchainFunctions';
import { connect } from './Blockchain/Connect/ConnectionFunctions';
import ConnectPage from './Blockchain/Connect/ConnectPage';
import {interfaceSelector} from './Blockchain/GUIAPI'

function App() {

  const [connected, setconnected] = useState(false)
  const [web3, setweb3] = useState(undefined)
  const [account, setaccount] = useState(undefined)
  const [contract, setcontract] = useState(undefined)
  const [user, setuser] = useState(undefined)
  const [cnic, setcnic] = useState(undefined)
  const [name, setname] = useState(undefined)
  const [district, setdistrict] = useState(undefined)
  const [userType, setuserType] = useState(undefined)
  const [totalAssets, settotalAssets] = useState(undefined)
  const [verfication, setverfication] = useState(undefined)
  

  const getBlockchainDetails = (selector) => {
    
    if (selector === 'connected') {

      return(connected)

    } else if (selector === 'web3') {

      return(web3)

    } else if (selector === 'account') {

      return(account)

    } else if (selector === 'contract') {

      return(contract)

    } else if (selector === 'user') {

      return(user)

    } else if (selector === 'cnic') {

      return(cnic)

    } else if (selector === 'name') {

      return(name)

    } else if (selector === 'district') {

      return(district)

    } else if (selector === 'userType') {

      return(userType)

    } else if (selector === 'totalAssets') {

      return(totalAssets)

    } else if (selector === 'verfication') {

      return(verfication)

    } else {
      
      return('empty')

    }

  }
  

  const userHandler = (_cnic,_name,_district,_userType,_userVerfication,_totalAssets) => {

    setcnic(_cnic)
    setname(_name)
    setdistrict(_district)
    setuserType(_userType)
    setverfication(_userVerfication)
    settotalAssets(_totalAssets)

    console.log('----------------------------------------')
    console.log('connect handler cnic',_cnic)
    console.log('connect handler name',_name)
    console.log('connect handler district',_district)
    console.log('connect handler userType',_userType)
    console.log('connect handler userVerfication',_userVerfication)
    console.log('connect handler totalAssets',_totalAssets)
    console.log('----------------------------------------')

  }

  const connectionHandler = (_web3,_accounts,_contract,_user,_connected) => {

    setweb3(_web3)
    setaccount(_accounts[0])
    setcontract(_contract)
    setuser(_user)
    setconnected(_connected)

    console.log('----------------------------------------')
    console.log('connect handler web3',_web3)
    console.log('connect handler account',_accounts[0])
    console.log('connect handler contract',_contract)
    console.log('connect handler user',_user)
    console.log('connect handler connected',_connected)
    console.log('----------------------------------------')

    getUserDetails(_user,userHandler)

  }

  useEffect(() => {

    console.log('account',account)
    
  }, [account])
  
  return (
    <div className="App">
      {connected === false?(
        <ConnectPage onClick={(e) => {

          e.preventDefault()

          connect(connectionHandler)
        
        }}/>
      ):(
        
        interfaceSelector(getBlockchainDetails)
        
      )}
      
    </div>
  );
}

export default App;
