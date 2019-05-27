import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import HeaderPage from "../_common/HeaderPage";

const AccountPage = props => {
    useEffect(() => {
        props.dispatch(userActions.getAll());
    }, []);

    const handleLogOut = () => {
        props.dispatch(userActions.logout());
    };
    
    // const handleDeleteUser = (id) => {
    //     return (e) => props.dispatch(userActions.delete(id));
    // };
    
    return (
        <main id="account-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/account" pageName="Особистий кабінет"/>
            <section className="section-account">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="user-photo-box">
                                <img src="images/doctor.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="user-info-first">
                                <h2 className="user-info-first__name">{props.user.firstName + ' ' + props.user.lastName}</h2>
                                <div className="user-info-first__links">
                                    <Link to="/edit" className="btn-custom">Редагувати</Link>
                                    <Link to="/" className="btn-custom" onClick={handleLogOut}>Вийти</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="user-info-second">
                            {props.users.loading && <p>Зачекайте будь-ласка, завантажуються дані об користувачеві</p>}
                            {
                                props.users.items &&
                                    <>
                                        <div className="user-info-second__item">
                                            <span className="field-name">Логін: </span>
                                            <span className="field-text">{props.user.username}</span>
                                        </div>
                                        <div className="user-info-second__item">
                                            <span className="field-name">Email: </span>
                                            <span className="field-text">{props.user.email}</span>
                                        </div>
                                        <div className="user-info-second__item">
                                            <span className="field-name">Номер телефону: </span>
                                            <span className="field-text">{props.user.phone}</span>
                                        </div>
                                    </>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(AccountPage);