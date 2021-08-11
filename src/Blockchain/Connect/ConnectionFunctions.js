import Web3 from 'web3'
import LandRegistrationContract from '../../abis/LandRegistrationContract.json'

export const connect = async (valueSetter) => {

    const ethereum = window.ethereum
    const web3 = await getWeb3
    console.log(web3)
    const accounts = await ethereum.enable()
    console.log(accounts)
    const contract = await getContractInstance(web3,LandRegistrationContract)

    const user = contract.methods.users(accounts[0]).call()

    console.log('connect f web3',web3)
    console.log('connect f account',accounts)
    console.log('connect f contract',contract)
    console.log('connect f user',user)


    valueSetter(web3,accounts,contract,user,true)

}

const getContractInstance = async (web3,contractDefinition) => {

    const networkId = await web3.eth.net.getId()
    console.log('network id: ', networkId)

    const deployedAddress = contractDefinition.networks[networkId].address
    console.log(deployedAddress)

    const deploayedNetwork = contractDefinition.networks[networkId]
    console.log(deploayedNetwork)

    const instance = new web3.eth.Contract(

        contractDefinition.abi,
        deploayedNetwork && deployedAddress

    )

    return instance

}

const getWeb3 = new Promise((resolve) => {
            
    window.addEventListener(`load`, () => {
        resolveWeb3(resolve);
    });
    
    if (document.readyState === `complete`) {
        resolveWeb3(resolve);
    }

})


const resolveWeb3 = (resolve) => {
    let { web3 } = window;
    const alreadyInjected = typeof web3 !== "undefined"; // i.e. Mist/Metamask
    const localProvider = `http://localhost:8545`;

    if (alreadyInjected) {
        console.log(`Injected web3 detected.`);
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log(`No web3 instance injected, using Local web3.`);
        const provider = new Web3.providers.HttpProvider(localProvider);
        web3 = new Web3(provider);
    }

    resolve(web3);
}