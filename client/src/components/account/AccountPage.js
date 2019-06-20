import React from 'react';
import LC from "local-storage";

import SectionHeader from "../common/SectionHeader";
import Info from './includes/Info'
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";
import UsersTable from "./includes/UsersTable";

const AccountPage = props => {
    const isAdmin = LC.get('profile').isAdmin;

    return (
        <main id="account-page">
            <SectionHeader
                bgImage={require('../../assets/images/about-bg.png')}
                pageLink="/account"
                pageName={isAdmin ? 'Особистий кабінет адміністратора' : 'Особистий кабінет користувача'}/>
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
};

export default AccountPage;