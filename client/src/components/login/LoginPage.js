import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import SectionHeader from "../common/SectionHeader";
import LoginForm from "./LoginForm";

const LoginPage = props => {
    return (
        <main id="login-page">
            <SectionHeader bgImage={require('../../assets/images/about-bg.png')} pageLink="/login" pageName="Авторизація"/>
            <div className="section-login">
                <div className="container">
                    <LoginForm propsLogin={props}/>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;