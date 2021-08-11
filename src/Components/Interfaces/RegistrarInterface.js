import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ApproveUser from '../Approvels/ApproveUser'
import AddNewPropertyForm from '../Form/AddNewPropertyForm'
import MenuBanner from '../menus/MenuBanner'
import RegistrarMenu from '../menus/RegistrarMenu'

const RegistrarInterface = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MenuBanner title={'Registrar Menu'} />
                    <RegistrarMenu />
                </Route>
                <Route exact path='/approveuserlist'>
                    <ApproveUser getBlockchainData={props.getBlockchainData}/>
                </Route>
                <Route exact path='/approvepurchaseslist'>
                    <div>Approve Purchases List</div>
                </Route>
                <Route exact path='/addnewproperityform'>
                    <AddNewPropertyForm getBlockchainData={props.getBlockchainData}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RegistrarInterface
