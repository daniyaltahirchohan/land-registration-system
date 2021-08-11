import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import MenuBanner from '../menus/MenuBanner'
import AddAdminForm from '../Form/AddAdminForm'
import AdminMenu from '../menus/AdminMenu'
import AddRegistrarForm from '../Form/AddRegistrarForm'
import ApproveProperty from '../Approvels/ApproveProperty'

const AdminInterface = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MenuBanner title={'Admin Menu'} />
                    <AdminMenu />
                </Route>
                <Route exact path='/addadminform'>
                    <AddAdminForm getBlockchainData={props.getBlockchainData} />
                </Route>
                <Route exact path='/addregistrarform'>
                    <AddRegistrarForm getBlockchainData={props.getBlockchainData} />
                </Route>
                <Route exact path='/propertyapprovalslist'>
                    <ApproveProperty getBlockchainData={props.getBlockchainData} />
                </Route>
            </Switch>
        </Router>
    )
}

export default AdminInterface
