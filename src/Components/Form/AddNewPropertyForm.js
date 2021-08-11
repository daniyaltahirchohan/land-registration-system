import React,{useState} from 'react'
import { AddNewProperty } from '../../Blockchain/BlockchainFunctions'
import { FormConstiner, FormTitle, MainForm, FormFieldLabel, FormInputField, FormButton} from './StyledForms'

const AddNewPropertyForm = (props,{className}) => {

    const [Address, setAddress] = useState(0x00)
    const [Price, setPrice] = useState(0)
    const [District, setDistrict] = useState('')
    const [Latitude, setLatitude] = useState('')
    const [Longitude, setLongitude] = useState('')
    

    const onSubmitHandler = (e) => {

        e.preventDefault()
        AddNewProperty(props.getBlockchainData('contract'),Address,Price,District,Latitude,Longitude,props.getBlockchainData('account'))
        

    }

    return (
        <FormConstiner className={className}>

            <FormTitle>Add new property</FormTitle>

            <MainForm onSubmit={onSubmitHandler}>


                <FormFieldLabel>Address</FormFieldLabel>
                <FormInputField 
                
                    type='text'
                    required
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}

                />

                <FormFieldLabel>Price</FormFieldLabel>
                <FormInputField 
                
                    type='int'
                    required
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}

                />

                <FormFieldLabel>District</FormFieldLabel>
                <FormInputField

                    type='text'
                    required
                    value={District}
                    onChange={(e) => setDistrict(e.target.value)}

                />

                <FormFieldLabel>Latitude</FormFieldLabel>
                <FormInputField 
                
                    type='text'
                    required
                    value={Latitude}
                    onChange={(e) => setLatitude(e.target.value)}

                />

                <FormFieldLabel>Longitude</FormFieldLabel>
                <FormInputField 
                
                    type='text'
                    required
                    value={Longitude}
                    onChange={(e) => setLongitude(e.target.value)}

                />

            <FormButton>Add Properity</FormButton>

            </MainForm>
            
        </FormConstiner>
    )
}

export default AddNewPropertyForm
