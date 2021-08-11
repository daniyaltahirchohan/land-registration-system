import React,{useState} from 'react'
import { AddNewUser } from '../../Blockchain/BlockchainFunctions'
import { FormButton, FormConstiner, FormFieldLabel, FormInputField, FormTitle, MainForm } from './StyledForms'

const SignUpForm = (props,{className}) => {

    const [CNIC,setCNIC] = useState(0)
    const [Name,setName] = useState('')
    const [District,setDistrict] = useState('')

    const onSubmitHandler = (e) => {

        e.preventDefault()

        AddNewUser(props.getBlockchainData('contract'),CNIC,Name,District,props.getBlockchainData('account'))
        
    
    }

    return (

        <FormConstiner className={className}>

            <FormTitle>Sign up</FormTitle>

            <MainForm onSubmit={onSubmitHandler}>

                <FormFieldLabel>CNIC</FormFieldLabel>
                <FormInputField 
                    
                    type="int"
                    required
                    value={CNIC}
                    onChange={(e) => setCNIC(e.target.value)}

                />

                <FormFieldLabel>Name</FormFieldLabel>
                <FormInputField 
                    
                    type="text"
                    required
                    value={Name}
                    onChange={(e) => setName(e.target.value)}

                />

                <FormFieldLabel>District</FormFieldLabel>
                <FormInputField 
                    
                    type="text"
                    required
                    value={District}
                    onChange={(e) => setDistrict(e.target.value)}

                />

                <FormButton style={{justifySelf:'center',margin:'20px'}}>Sign up</FormButton>

            </MainForm>

        </FormConstiner>

    )
}

export default SignUpForm
