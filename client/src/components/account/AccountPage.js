import React, { PureComponent } from 'react';
import LC from "local-storage";

import SectionHeader from "../common/SectionHeader";
import Info from './includes/Info';
import UsersTable from "./includes/UsersTable";
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";
import { healthStatusApi } from "../../api";

const isAdmin = LC.get('profile').isAdmin;
const login = LC.get('profile').login;

class AccountPage extends PureComponent {
    state = {
        healthStatus: {}
    };
    
    componentDidMount() {
        healthStatusApi.listUser(login).then(res => {
            this.setState({
                healthStatus: res.data.data
            });
        });
    }
    
    render () {
        const { healthStatus } = this.state;
        console.log(healthStatus);
    
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
                            <HealthChart healthData={healthStatus}/>
                        </>
                }
            </main>
        );
    }
}

export default AccountPage;