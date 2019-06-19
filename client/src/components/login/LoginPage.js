import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import HeaderPage from "../common/HeaderPage";
import LoginForm from "./LoginForm";

const LoginPage = props => {
    return (
        <main id="login-page">
            <HeaderPage bgImage={require('../../assets/images/about-bg.png')} pageLink="/login" pageName="Авторизація"/>
            <div className="section-login">
                <div className="container">
                    <LoginForm propsLogin={props}/>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;