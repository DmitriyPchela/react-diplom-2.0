import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router'
import "bootstrap/dist/js/bootstrap.bundle";

import { authApi } from "../../api/authApi";
import HeaderPage from "../common/HeaderPage";
import LoginForm from "./LoginForm";
import {usersApi} from "../../api";


const userAuth = {
    login: '',
    password: '',
};

const LoginPage = props => {
    const [user, setUser] = useState(userAuth);
    const [errors, setErrors] = useState({});
    const [isSuccess, setSuccess] = useState(false);
    
    const validate = (data) => {
        const errors = {};
        if (!data.login) errors.login = "Поле логін обов'язкове";
        if (!data.password || data.password.length < 6) errors.password = "Поле пароль обов'язкове";
        
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = validate(user);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setSuccess(true);
            authApi.login(user).then(res => {
                if (res.data.status === 'success') {
                    props.history.push('/account');
                } else {
                    alert(res.data.message);
                }
            });
        }
    };

    return (
        <main id="login-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/login" pageName="Авторизація"/>
            <div className="section-login">
                <div className="container">
                    <LoginForm errors={errors} onSubmit={handleSubmit} onChange={handleChange}/>
                </div>
            </div>
        </main>
    );
};

export default withRouter(LoginPage)