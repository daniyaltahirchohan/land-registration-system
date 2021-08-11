
export const getUserDetails = async (user,setUserDetails) => {

    const userDetails = await user.then((result) => {

        setUserDetails(result[0],result[1],result[2],result[4],result[3],result[5])
    })

    console.log('--------user details-----------\n',userDetails)

}

export const addNewAdmin = async (_contract,_address,_cnic,_name,_district,accountsHolder) => {
    
    alert(accountsHolder)
    console.log(_contract)

    await _contract.methods
    .addNewAdmin(_address,_cnic,_name,_district)
    .send({ from: accountsHolder })
    .then(console.log)
    .catch(console.log)

}

export const addNewRegistrar = async (_contract,_address,_cnic,_name,_district,accountsHolder) => {
    
    alert(accountsHolder)
    console.log(_contract)

    await _contract.methods
    .addNewRegistrar(_address,_cnic,_name,_district)
    .send({ from: accountsHolder })
    .then(console.log)
    .catch(console.log)

}

export const AddNewUser = async (_contract,_cnic,_name,_district,accountsHolder) => {

	await _contract.methods
		.addNewUser(accountsHolder, _cnic, _name, _district)
		.send({ from: accountsHolder })
		.then(console.log)
        .catch(console.log)

}

export const getUserOuterDetails = async (contract,address,setUserDetails,account) => {

	await contract.methods
		.users(address)
		.call({ from: account })
		.then((result) => {
			setUserDetails(result[0],result[1],result[2],result[4],result[3],result[5])
			console.log(result);
		})
        .catch(console.log)



}

export const ApproveNewUser = async (contract,address,account) => {

	await contract.methods
		.approveUserAccept(address)
		.send({ from: account })
		.then((result) => {
			console.log(result)
		})
        .catch(console.log)

}

export const RejectNewUser = async (contract,address,account) => {

	await contract.methods
    .rejectUserReject(address)
    .send({ from: account })
    .then((result) => {
        console.log(result)
    })
    .catch(console.log)

}

export const AddNewProperty = async (contract,address,price,district,latitude,longitude,account) => {
	await contract.methods
		.createProperty(address,price,district,latitude,longitude)
		.send({ from: account })
		.then(console.log)
        .catch(console.log)
}

export const AppropveNewProperty = async (contract,propertyid,account) => {

    await contract.methods
        .approveProperty(propertyid)
        .send({ from: account })
        .then(console.log)
        .catch(console.log)

}

export const RejectNewProperty = async (contract,propertyid,account) => {

    await contract.methods
    .rejectProperty(propertyid)
    .send({ from: account })
    .then(console.log)
    .catch(console.log)

}

export const getUserProperties = async (contract,account,setData) => {

    let data

    await contract.methods.assets(account,0).call()
    .then((result) => {
        data=result
    })
    .catch(console.log)

    console.log('aaaaaarrrrreeee',data)


    getPropertyDetails(contract,setData,data,account)

    


}

export const getPropertyDetails = async (contract,setPropertyDetails,propertyId,account) => {

    await contract.methods
    .properties(propertyId)
    .call({ from: account})
    .then((result) => {
        setPropertyDetails(result[0],result[1],result[2],result[3],result[4],result[5],result[7])
    })
    .catch(console.log)

}





