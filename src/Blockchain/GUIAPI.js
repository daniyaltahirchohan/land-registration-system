import AdminInterface from "../Components/Interfaces/AdminInterface"
import CreatorInterface from "../Components/Interfaces/CreatorInterface"
import RegistrarInterface from "../Components/Interfaces/RegistrarInterface"
import SignUpPage from "../Components/Interfaces/SignUpPage"
import UserInterface from "../Components/Interfaces/UserInterface"
import NavBar from '../Components/Navbar/Navbar'

export const interfaceSelector = (option) => {

    console.log('-------------',option('userType'))

    let interfaceHolder
    
    switch (option('userType')) {

        case '1': 
        interfaceHolder = (
            <div>
            <NavBar blockchainData={option}/>
            <UserInterface getBlockchainData={option}/>
            </div>
        )
        break

        case '2': 
        interfaceHolder = (
            <div>
            <NavBar blockchainData={option}/>
            <RegistrarInterface getBlockchainData={option}/>
            </div>
        )
        break

        case '3': 
        interfaceHolder = (
            <div>
            <NavBar blockchainData={option}/>
            <AdminInterface getBlockchainData={option}/>
            </div>
        )
        break

        case '4': 
        interfaceHolder = (
            <div>
            <NavBar blockchainData={option}/>
            <CreatorInterface getBlockchainData={option} />
            </div>
        )
        break
    
        default: 
        interfaceHolder = <SignUpPage getBlockchainData={option}/>

    }

    return interfaceHolder

}

