import React, { Component } from 'react';
import LC from "local-storage";

import SectionHeader from "../common/SectionHeader";
import Info from './includes/Info';
import UsersTable from "./includes/UsersTable";
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";

const isAdmin = LC.get('profile').isAdmin;

class AccountPage extends Component {
    render () {
        return (
            <main id="account-page">
                <SectionHeader
                    bgImage={require('../../assets/images/about-bg.png')}
                    pageLink="/account"
                    pageName={`Особистий кабінет ${isAdmin ? 'адміністратора' : 'пацієнта'}`}/>
                <Info/>
                {
                    isAdmin ?
                        <UsersTable/> :
                        <>
                            <HealthTable/>
                            <HealthChart/>
                        </>
                }
            </main>
        );
    }
}

export default AccountPage;