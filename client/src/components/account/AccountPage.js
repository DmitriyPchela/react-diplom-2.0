import React, { Component } from 'react';
import LC from "local-storage";
import SectionHeader from "../common/SectionHeader";
import Info from './includes/Info';
import UsersTable from "./includes/UsersTable";
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";
import MedicineTable from "./includes/MedicineTable";



class AccountPage extends Component {
    state = {
        isAdmin: LC.get('profile').isAdmin
    };
    
    render () {
        return (
            <main id="account-page">
                <SectionHeader
                    bgImage={require('../../assets/images/about-bg.png')}
                    pageLink="/account"
                    pageName={`Особистий кабінет ${this.state.isAdmin ? 'лікаря' : 'пацієнта'}`}/>
                <Info/>
                {
                    this.state.isAdmin ? (
                        <UsersTable/>
                        ) : (
                        <>
                            <MedicineTable title="Ваші ліки"/>
                            <HealthTable/>
                            <HealthChart/>
                        </>
                    )
                }
            </main>
        );
    }
}

export default AccountPage;