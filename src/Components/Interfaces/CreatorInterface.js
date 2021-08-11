import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddAdminForm from '../Form/AddAdminForm'
import CreatorMenu from '../menus/CreatorMenu'
import MenuBanner from '../menus/MenuBanner'

const CreatorInterface = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MenuBanner title={'Creator Menu'} />
                    <CreatorMenu />
                </Route>
                <Route exact path='/addadminform'>
                    <AddAdminForm getBlockchainData={props.getBlockchainData} />
                </Route>
            </Switch>
        </Router>
    )
}

export default CreatorInterface
