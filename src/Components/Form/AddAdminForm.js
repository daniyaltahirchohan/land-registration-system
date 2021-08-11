import React,{useState} from 'react'
import { addNewAdmin } from '../../Blockchain/BlockchainFunctions'
import { FormConstiner, FormTitle, MainForm, FormFieldLabel, FormInputField, FormButton} from './StyledForms'


const AddAdminForm = (props,{className}) => {

    const [Address, setAddress] = useState(0x00)
    const [CNIC, setCNIC] = useState(0)
    const [Name, setName] = useState('')
    const [District, setDistrict] = useState('')
    

    const onSubmitHandler = (e) => {

        e.preventDefault()
        addNewAdmin(props.getBlockchainData('contract'),Address,CNIC,Name,District,props.getBlockchainData('account'))

    }

    return (
        <FormConstiner className={className}>

            <FormTitle>Add new admin</FormTitle>

            <MainForm onSubmit={onSubmitHandler}>


                <FormFieldLabel>Address</FormFieldLabel>
                <FormInputField 
                
                    type='text'
                    required
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}

                />

                <FormFieldLabel>CNIC</FormFieldLabel>
                <FormInputField 
                
                    type='int'
                    required
                    value={CNIC}
                    onChange={(e) => setCNIC(e.target.value)}

                />

                <FormFieldLabel>Name</FormFieldLabel>
                <FormInputField

                    type='text'
                    required
                    value={Name}
                    onChange={(e) => setName(e.target.value)}

                />

                <FormFieldLabel>District</FormFieldLabel>
                <FormInputField 
                
                    type='text'
                    required
                    value={District}
                    onChange={(e) => setDistrict(e.target.value)}

                />

            <FormButton>Add Admin</FormButton>

            </MainForm>
            
        </FormConstiner>
    )
}

export default AddAdminForm
