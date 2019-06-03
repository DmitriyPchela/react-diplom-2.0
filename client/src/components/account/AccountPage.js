import React from 'react';
import HeaderPage from "../common/HeaderPage";
import Info from './includes/Info'
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";

const AccountPage = props => {
    return (
        <main id="account-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/account" pageName="Особистий кабінет"/>
            <Info/>
            <HealthTable/>
            <HealthChart/>
        </main>
    );
};

export default AccountPage;