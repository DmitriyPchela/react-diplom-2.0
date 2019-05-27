import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {alertActions, userActions} from '../_actions';
import {history} from "../_helpers";
import "bootstrap/dist/js/bootstrap.bundle";


import HeaderPage from "../_common/HeaderPage";
import LoginForm from "./LoginForm";


const userLogin = {
    username: '',
    password: '',
};

const LoginPage = props => {
    useEffect(() => {
        props.dispatch(userActions.logout());
    }, []);
    
    const [user, setUser] = useState(userLogin);
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    };
    
    history.listen((location, action) => {
        props.dispatch(alertActions.clear());
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setSubmit(true);
        const {username, password} = user;
        if (username && password) {
            props.dispatch(userActions.login(username, password));
        }
    };
    
    return (
        <main id="login-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/login" pageName="Авторизація"/>
            <div className="section-login">
                <div className="container">
                    {
                        props.alert.message &&
                        <div className={`alert ${props.alert.type}`}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {
                                props.alert.type === 'alert-success' ? <h4 className="alert-heading">Вітаємо!</h4> : ''
                            }
                            {props.alert.message}
                        </div>
                    }
                    <LoginForm username={user.username} password={user.password} isSubmit={isSubmit} onSubmit={handleSubmit} onChange={handleChange}/>
                </div>
            </div>
        </main>
    );
};

function mapStateToProps(state) {
    const { alert } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        alert
    };
}

export default connect(mapStateToProps)(LoginPage)