import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import LC from "local-storage";

import { usersApi, healthStatusApi } from "../../api";
import { deleteUserProfile } from "../../store/actions";
import HeaderPage from "../common/HeaderPage";
import Info from './includes/Info'
import HealthTable from "./includes/HealthTable";
import HealthChart from "./includes/HealthChart";

const AccountPage = props => {
    const [user, setUser] = useState({});
    const [healthData, setHealthData] = useState({});
    const [loading, setLoading] = useState(true);



    const getCurrentUser = (users) => {
        users.map(item => {
            return item.login === LC.get('profile').login && setUser(item);
        });
    };

    const getUserHealth = (data) => {
        setHealthData(data.filter(item => {
           return item.userID === LC.get('profile').login && item;
        }));
    };

    const apiCallSuccess = (user) => {
        getCurrentUser(user);
        setLoading(false);
    };

    const apiHealthSuccess = (data) => {
        getUserHealth(data);
        setLoading(false);
    };

    useEffect( () => {
        (async function () {
            const apiCall = await usersApi.list();
            apiCall.statusText === 'OK' ? apiCallSuccess(apiCall.data.data) : alert(apiCall.statusText);
        })();
        (async function () {
            const apiHealthCall = await healthStatusApi.list();
            apiHealthCall.statusText === 'OK' ? apiHealthSuccess(apiHealthCall.data.data) : alert(apiHealthCall.statusText);
        })();
    }, []);

    return (
        <main id="account-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/account" pageName="Особистий кабінет"/>
            <Info user={user} loading={loading}/>
            <HealthTable healthData={healthData} loading={loading}/>
            <HealthChart healthData={healthData}/>
        </main>
    );
};

const mapStateToProps = ({ profile }) => {
    return { profile };
};

export default connect(
    mapStateToProps, { deleteUserProfile }
)(AccountPage);