import { StyledNav, StyledNavTitle, StyledNavUserID } from './StyledNavbar'

const Navbar = (props,className) => {


        const fetchUserType = (option) => {

            switch (option) {

                case '1':
                    return('User')           
     
                case '2':
                    return('Registrar')
     
                case '3':
                    return('Admin')
            
                default:
                    return('Creator')

            }
            
        }
        


       


   

   
   

    return (
        <StyledNav className={className}>
            <StyledNavTitle>land registration system</StyledNavTitle>
            <StyledNavUserID>{fetchUserType(props.blockchainData('userType'))} id: {props.blockchainData('account')}</StyledNavUserID>
        </StyledNav> 
    )
}

export default Navbar
