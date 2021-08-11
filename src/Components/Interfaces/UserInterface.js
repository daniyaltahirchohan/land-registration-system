import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import OwnedPropertiesList from '../List/OwnedPropertiesList'
import MenuBanner from '../menus/MenuBanner'
import UserMenu from '../menus/UserMenu'

const UserInterface = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MenuBanner title={'User Menu'} />
                    <UserMenu />
                </Route>

                <Route exact path='/OwnedProperties'>
                    <OwnedPropertiesList getBlockchainData={props.getBlockchainData}/>
                </Route>

            </Switch>
        </Router>
    )
}

export default UserInterface
